const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bjzga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect the client to the server (optional starting in v4.7)
    // await client.connect();

    const campaignCollection = client.db("campaingDB").collection("campaing");
    const donationCollection = client.db("campaingDB").collection("donation");

    // Get all campaigns
    app.get("/campaign", async (req, res) => {
      const cursor = campaignCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get all donations
    app.get("/donation", async (req, res) => {
      const cursor = donationCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get a single campaign by ID
    app.get("/campaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.findOne(query);
      res.send(result);
    });

    // Create a new campaign
    app.post("/campaign", async (req, res) => {
      const newCampaign = req.body;
      console.log(newCampaign);
      const result = await campaignCollection.insertOne(newCampaign);
      res.send(result);
    });

    // Create a new donation
    app.post("/donation", async (req, res) => {
      const newDonation = req.body;
      console.log(newDonation);
      const result = await donationCollection.insertOne(newDonation);
      res.send(result);
    });

    // Update an existing campaign
    app.put("/campaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCampaign = req.body;
      const campaign = {
        $set: {
          image: updatedCampaign.image,
          title: updatedCampaign.title,
          type: updatedCampaign.type,
          minDonation: updatedCampaign.minDonation,
          deadline: updatedCampaign.deadline,
          description: updatedCampaign.description,
        },
      };
      const result = await campaignCollection.updateOne(query, campaign, options);
      res.send(result);
    });

    // Delete a campaign by ID
    app.delete("/campaign/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("All Campaign");
});

app.listen(port, () => {
  console.log(`Crowd Funding server is running on port: ${port}`);
});
