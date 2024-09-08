const express = require('express');
const router = express.Router();

// Mock database
const resumes = {};

router.post('/generate-url', (req, res) => {
    const username = req.body.username;
    const uniqueUrl = `https://${username}.vercel.app/resume`;
    resumes[username] = uniqueUrl;
    res.json({ url: uniqueUrl });
});

module.exports = router;

