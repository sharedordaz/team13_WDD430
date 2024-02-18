/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
const { connectToDatabase } = require('./database/connect.js');
const { databasetoJSON } = require('./database/read_db.js');

const http = require('http');

const os = require('os');

const hostname = os.hostname();
//console.log('Hostname:', hostname);

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

        //const url = hostname + port

        //console.log(url);
        
            }
    catch(error){
        console.error('Error: ', error);
        process.exit(1);
    }
   
    console.log('\x1b[36m', `> Ready on Port`, '\x1b[1m', '\x1b[31m', `${port}`, '\x1b[0m');

//HTTP REQUEST TO AUTOCOMPILE
    const options = {
        hostname: hostname, // Assuming your server is running on localhost
        port: port, // Assuming your server is running on port 3000, change accordingly
        path: '/database', // The endpoint you want to hit
        method: 'GET' // or 'POST', 'PUT', 'DELETE', etc. depending on your needs
    };
    const req = http.request(options, (res) => {
        //console.log(`\x1b[1m GET REQUEST INFO\n Hostname: ${hostname}\n PORT: ${port}`)
        //console.log(`URL: http://${hostname}:${port}/database`)
        //console.log(`statusCode: ${res.statusCode}\x1b[0m`);

        res.on('data', (d) => {
            if (d){
                let result = JSON.stringify(d);
                let simp_result = result.substring(0, 20)
                process.stdout.write(`Request read: ${simp_result} ...`);
                }
            else{
                process.stdout.write('Nothing shown')
            }
        });
    });

    req.on('error', (error) => {
    console.error(error);
    });

    req.end();

//
  });
});
