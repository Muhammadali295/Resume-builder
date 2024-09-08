const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const resumeRoutes = require('./routes');

const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());
app.use('/api', resumeRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
