/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { connectToDatabase } = require('./database/connect.js'); // Adjust the path accordingly
const { databasetoJSON } = require('./database/read_db.js')

const port = 3000;



app.prepare().then(() => {
  const server = express();

  server.get('/database', (req, res) => {
        try{
             databasetoJSON(req, res);
        }catch(error){
        console.log('/database error: ', error)
        }
    console.log("On /database")
        });

  server.get('*', (req, res) => {
    try{
        connectToDatabase()

    }catch(error){
        console.error('Error: ', error)
    }
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on Port ${port}`);
  });
});

