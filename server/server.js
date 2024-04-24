'use strict';

const express = require('express');
const path = require('path');
const app = express();

const test = {
    "test": "Hello World"
}

app.get("/", (req, res)=>{
    res.json({
        "test": "Hello World"
    });
})

app.get("/Visit", (req, res) => {
    res.send("VISIT PAGE");
})


// // Serve static files from the React app directory
// app.use(express.static(path.join(__dirname, '../client/public')));

// // Define route for the homepage
// app.get("/", (req, res) => {
//   // Send the index.html file of the React app
//   res.sendFile(path.join(__dirname, '../client/public' , 'index.html'));
// });
// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});