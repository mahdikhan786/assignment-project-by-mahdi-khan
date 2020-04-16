import express from 'express';
import fs from 'fs';
import path from 'path';
const compression = require('compression');

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = 8000;

const app = express();

app.use(compression());

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err){
            console.log(err);
            return res.status(500).send('error occured');
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
    })
}); 
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.listen(process.env.PORT || PORT, () => {
    console.log(`app running on ${PORT}`);
})