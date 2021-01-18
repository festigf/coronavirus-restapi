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

async function createListing(client, newListing){
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}


await createListing(client,
  {
      name: "Lovely Loft",
      summary: "A charming loft in Paris",
      bedrooms: 1,
      bathrooms: 1
  }
);
