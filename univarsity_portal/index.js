const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174']
}
app.use(cors(corsOptions))
app.use(express.json());


const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/result', (req, res) => {
    const id = req.query.id;
    const result = data[id];

    console.log("id -> ", id);

    if (result) {
        res.json({ id, result });
    } else {
        res.status(404).json({ error: "ID not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
