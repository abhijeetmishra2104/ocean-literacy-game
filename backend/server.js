import express from 'express';
import { getOceanConditions } from './oceanData.js';
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.get('/api/ocean-conditions', (req, res) => {
    const data = getOceanConditions();
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
