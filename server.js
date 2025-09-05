const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the current directory
app.use(express.static('.'));

// Handle SPA routing - serve index.html for any route that doesn't match a file
app.get('*', (req, res) => {
  // Check if the request is for a specific HTML file
  if (req.path.endsWith('.html') || req.path === '/') {
    res.sendFile(path.join(__dirname, req.path === '/' ? 'index.html' : req.path));
  } else {
    // For other routes, try to serve the file, or fallback to index.html
    res.sendFile(path.join(__dirname, req.path), (err) => {
      if (err) {
        res.sendFile(path.join(__dirname, 'index.html'));
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});