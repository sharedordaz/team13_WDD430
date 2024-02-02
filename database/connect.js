const { MongoClient, ServerApiVersion } =  require('mongodb');

const uri = "mongodb+srv://readWrite:handcraftHaven@cluster0.nzpdodr.mongodb.net/";


const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1});

async function connectToDatabase(){
    try{
    await client.connect();
        console.log('Connected to the database');

    } catch (error){
        console.error("Error connecting to the database. Error: \n", error)
    }
}

module.exports = { client, connectToDatabase };

