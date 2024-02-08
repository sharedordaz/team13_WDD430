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

  server.get('*', async (req, res) => {
    return handle(req, res);
  })
  server.listen(port, async (err) => {
    if (err) throw err;
    try{
        await connectToDatabase();
        console.log('\x1b[1m','\x1b[32m', 'Connected to the database', '\x1b[0m')
    }

    catch(error){
        console.error('Error: ', error);
        process.exit(1);
    }

   
    console.log('\x1b[36m', `> Ready on Port`, '\x1b[1m', '\x1b[31m', `${port}`, '\x1b[0m');
  });
});

