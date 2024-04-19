const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./client/App'); // Assuming your main React component is in client/App.js

const app = express();
const port = 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle requests for the /publications route
app.get('/publications', (req, res) => {
  // Render the React app with the appropriate route
  const context = {};
  const html = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context: context },
      React.createElement(App)
    )
  );

  // If the requested URL matches a React route, send the rendered HTML
  // Otherwise, send the default index.html file
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.status(200).send(html);
  }
});

// For all other requests, serve the default index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
