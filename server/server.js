const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/formRoutes');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Correctly use cors middleware
app.use('/api/v1', router); // Use the routes from formRoutes

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
