import React from 'react';
import { MongoClient } from "mongodb";
import Head from "next/head";

import PlacesList from "@/components/places/PlacesList";
import { Place } from "@/components/places/PlacesList";

function HomePage({ places }: { places: Place[] }) {
  return (
    <React.Fragment>
      <Head>
        <title>Krakow Places</title>
        <meta name="description" content="Find the best places in Krakow" />
      </Head>
      <PlacesList places={places} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://victoria:Test12345@cluster0.u1lrzeg.mongodb.net/krakowPlaces?retryWrites=true&w=majority"
  );
  const db = client.db();
  const placesCollection = db.collection("krakowplaces");
  const placesData = await placesCollection.find().toArray();

  client.close();

  return {
    props: {
      places: placesData.map((entry) => ({
        id: entry._id.toString(),
        title: entry.title,
        image: entry.image,
        address: entry.address,
      })),
    },
    revalidate: 100,
  };
}

export default HomePage;
