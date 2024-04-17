const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/public')));

// Define additional API routes or other Express middleware as needed

// Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
