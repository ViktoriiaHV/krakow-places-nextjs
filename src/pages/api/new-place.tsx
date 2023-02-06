// api request to api/new-place
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://victoria:Test12345@cluster0.u1lrzeg.mongodb.net/krakowPlaces?retryWrites=true&w=majority"
    );
    const db = client.db();

    const placesCollection = db.collection("krakowplaces");
    const result = await placesCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Added sucessfully"});
  }
  return;
}

export default handler;
