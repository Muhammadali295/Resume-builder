const express = require('express');
const cors = require('cors');
const resumeRoutes = require('./routes'); // Adjust path if needed

const app = express();
const port = 3000;

// Use the cors middleware with specific origin
app.use(cors({
    origin: 'https://resume-builder-2qwij5y0u-muhammad-alis-projects-5543e715.vercel.app'
}));

app.use(express.json()); // Use built-in express.json() middleware
app.use('/api', resumeRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
