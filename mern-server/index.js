const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const cors = require("cors");

// const express = require('express');
const bodyParser = require("body-parser");

// const app = express();
// const port = 2000;

app.use(bodyParser.json());

//middleware
app.use(
  cors({
    origin: "https://mern-book-client-coral.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json()); //make conn with frontend -imp

//database

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Testting");
});

//mongodb configuration
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://vaishali22220326:0NRTP80j8lJdH2Yf@cluster0.8wo2i09.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //create collection for document
    const bookCollection = client.db("bookInventory").collection("books");
    //insert book to db using post
    //insert book to db using post
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.status(200).json({
          message: "Book uploaded successfully",
          insertedId: result.insertedId,
        });
      } catch (error) {
        console.error("Error uploading book:", error);
        res.status(500).json({ error: "Failed to upload book" });
      }
    });

    //get all this book
    app.get("/all-books", async (req, res) => {
      //execute query
      const books = await bookCollection.find();
      const result = await books.toArray();
      res.send(result);
    });

    //update book data
    //update method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };

      //update
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete book data

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    //find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

    //to get single data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
