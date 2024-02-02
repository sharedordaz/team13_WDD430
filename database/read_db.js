const { client } = require('./connect.js')

async function databasetoJSON(req, res){
     try{
     const database = client.db('Handcraft_Haven');
     const collection = database.collection('artworks');
     
     const data =  await collection.find({}).toArray();
     console.log(data);
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(data));
    }catch (error){
     console.error("Error fetching data from the database");
     res.writeHead(500, { 'Content-Type': 'text/plain' });
     res.end('Internal Server Error');
    }
    
}

module.exports = { databasetoJSON };

