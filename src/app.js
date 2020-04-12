const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const viewPath = app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');


const rootRoute = express.Router();

rootRoute.route('/')
  .get((req, res) => {
    return res.render(viewPath + 'index', { 'title': 'Index' });
  });

module.exports = app;
