const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const resumeRoutes = require('./routes');

const app = express();
const port = 3000;

// Use the cors middleware with specific origin
app.use(cors({
    // origin: 'https://resume-builder-2qwij5y0u-muhammad-alis-projects-5543e715.vercel.app'
}));

app.use(bodyParser.json());
app.use('/api', resumeRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
