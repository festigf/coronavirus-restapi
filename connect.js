const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
//const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const url="mongodb+srv://festigf:Cbm4XvlWqW2oHSU9@cluster0.3ldbf.mongodb.net/<dbname>?retryWrites=true&w=majority"
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
