const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello From Vibhor, Dockerized Node.js App! Thanks for visiting');
});

app.listen(PORT, () => {
	console.log(`App running on http://localhost:${PORT}`);
});
