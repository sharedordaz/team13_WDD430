/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
const { connectToDatabase } = require('./database/connect.js');
const { databasetoJSON } = require('./database/read_db.js');

const { exec } = require('child_process');
const http = require('http');

//const dev = process.env.NODE_ENaV;
const dev = process.env.NODE_ENV !== 'production';
console.log("DEV:", dev);
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;


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

        const url = 'http://localhost:' + port

        console.log(url);
        exec('curl')
            }
    catch(error){
        console.error('Error: ', error);
        process.exit(1);
    }
   
    console.log('\x1b[36m', `> Ready on Port`, '\x1b[1m', '\x1b[31m', `${port}`, '\x1b[0m');
    const options = {
        hostname: 'localhost', // Assuming your server is running on localhost
        port: 3000, // Assuming your server is running on port 3000, change accordingly
        path: '/?sort=alphre', // The endpoint you want to hit
        method: 'GET' // or 'POST', 'PUT', 'DELETE', etc. depending on your needs
    };
    const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
    });

    req.on('error', (error) => {
    console.error(error);
    });

    req.end();


  });
});
