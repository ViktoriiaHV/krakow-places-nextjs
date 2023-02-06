import PlaceDetails from "@/components/places/PlaceDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";

function PlaceDetailsPage({ placeData }) {
  // create component for displaying details

  return (
    <React.Fragment>
      <Head>
        <title>{placeData.title}</title>
        <meta name="description" content={placeData.description} />
      </Head>
      <PlaceDetails
        image={placeData.image}
        title={placeData.title}
        description={placeData.description}
        id={placeData._id}
      />
    </React.Fragment>
  );
}

export async function getStaticProps(context: any) {
  const client = await MongoClient.connect(
    "mongodb+srv://victoria:Test12345@cluster0.u1lrzeg.mongodb.net/krakowPlaces?retryWrites=true&w=majority"
  );
  const db = client.db();
  const placesCollection = db.collection("krakowplaces");
  const placeData = await placesCollection.findOne({
    _id: new ObjectId(context.params.placeId),
  });

  client.close();

  return {
    props: {
      placeData: {
        ...placeData,
        _id: placeData?._id.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://victoria:Test12345@cluster0.u1lrzeg.mongodb.net/krakowPlaces?retryWrites=true&w=majority"
  );
  const db = client.db();
  const placesCollection = db.collection("krakowplaces");
  const placesData = await placesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: placesData.map((place) => ({
      params: { placeId: place._id.toString() },
    })),
  };
}

export default PlaceDetailsPage;
