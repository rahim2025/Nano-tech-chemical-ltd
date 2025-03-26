const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();

// Set ejs-mate as the view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home - Nanotech Chemical Industry Limited',
        layout: 'layouts/layout'
    });
});

app.get('/product', (req, res) => {
    res.render('product', { 
        title: 'Products - Nanotech Chemical Industry Limited',
        layout: 'layouts/layout'
    });
});

app.get('/profile', (req, res) => {
    res.render('profile', { 
        title: 'Profile - Nanotech Chemical Industry Limited',
        layout: 'layouts/layout'
    });
});

app.get('/career', (req, res) => {
    res.render('career', { 
        title: 'Careers - Nanotech Chemical Industry Limited',
        layout: 'layouts/layout'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Us - Nanotech Chemical Industry Limited',
        layout: 'layouts/layout'
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
