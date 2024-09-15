const {db} = require('../db'); // Import the database connection module

// Controller function to handle form submission
const submitForm = (req, res) => {
    const formData = req.body;

    // List of required fields
    const requiredFields = [
        "name",
        "email",
        "message",
        "number"
    ];

    // Check for missing fields
    const missingFields = requiredFields.filter(field => !formData.hasOwnProperty(field));
    if (missingFields.length > 0) {
        return res.status(400).json({
            success: false,
            error: 'All fields are required',
            message: `Missing fields: ${missingFields.join(', ')}`
        });
    }

    // SQL query to insert form data into the database
    const sql = 'INSERT INTO form (name, email, message, number) VALUES (?, ?, ?, ?)';

    // Execute the query
    db.query(sql, [formData.name, formData.email, formData.message, formData.number], (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            return res.status(500).json({
                success: false,
                error: 'Internal Server Error',
                message: 'An error occurred while saving data.'
            });
        }

        // Respond with success message
        console.log('Form data inserted successfully');
        res.status(201).json({
            success: true,
            message: 'Form submitted successfully',
            data: result
        });
    });
};

module.exports = { submitForm };
