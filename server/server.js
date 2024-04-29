const express = require('express');
const path = require('path'); // For serving static files
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080; // Use environment variable or default port
app.use(cors({
    origin: "http://localhost:3000"
}))
// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
console.log(path.join(__dirname, '..', 'client', 'public'))
// Catch-all route handler for client-side routing
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});