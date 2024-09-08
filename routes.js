const express = require('express');
const router = express.Router();

// Mock database
const resumes = {};

router.post('/generate-url', (req, res) => {
    const username = req.body.username;
    
    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    const uniqueUrl = `https://${username}.vercel.app/resume`;
    resumes[username] = uniqueUrl;
    res.json({ url: uniqueUrl });
});

module.exports = router;


