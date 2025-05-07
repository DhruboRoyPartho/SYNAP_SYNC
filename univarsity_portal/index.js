const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/result/:id', (req, res) => {
    const id = req.params.id;
    const result = data[id];

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
