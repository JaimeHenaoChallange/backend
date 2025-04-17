const express = require('express');
const app = express();
const port = 8080;

// Ruta básica para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});