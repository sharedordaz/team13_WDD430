/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
const { connectToDatabase } = require('./database/connect.js');
const { databasetoJSON } = require('./database/read_db.js');

//const dev = process.env.NODE_ENaV;
const dev = process.env.NODE_ENV !== 'production';
console.log("DEV:", dev);
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(async () => {
    const server = express();
    
    try {
        await connectToDatabase();
        console.log('\x1b[1m', '\x1b[32m', 'Connected to the database', '\x1b[0m')
    } catch (error) {
        console.error('Error: ', error);
        process.exit(1);
    }

    // Define your routes
    server.get('/database', async (req, res) => {
        try {
            await databasetoJSON(req, res);
        } catch (error) {
            console.log('/database error: ', error)
        }
        console.log("On /database")
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    // Start the server
    server.listen(port, (err) => {
        if (err) throw err;

        console.log('\x1b[36m', `> Ready on Port`, '\x1b[1m', '\x1b[31m', `${port}`, '\x1b[0m');
    });
});
