const http  = require('http');
const { MongoClient, ServerApiVersion } = require('mongodb');

const server = http.createServer(async (req, res) => {
    if (req.url === '/database') {
        try {
            const uri = "mongodb+srv://readWrite:handcraftHaven@cluster0.nzpdodr.mongodb.net/";
            const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

            await client.connect();

            const database = client.db("Handcraft_Haven"); // Replace with your actual database name
            const collection = database.collection("artworks"); // Replace with your actual collection name

            const data = await collection.find({}).toArray();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (error) {
            console.error("Error connecting to the database:", error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } finally {
            await client.close();
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
