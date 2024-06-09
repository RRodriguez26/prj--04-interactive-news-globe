import { apiKey } from './secret';

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());  

app.get('/api/news', async (req, res) => {
    try {
        // Example fetching from an external API
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                apiKey: apiKey,
                country: req.query.country,
                category: req.query.category,
                language: 'en'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Failed to fetch news:', error);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
