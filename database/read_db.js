const { client } = require('./connect.js')

function databasetoJSON(req, res){
     const database = client.db('Handcraft_Haven');
     const collection = database.collection('artworks');
     
     const data =  collection.find({}).toArray();
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(data));
    
}

module.exports = { databasetoJSON };

