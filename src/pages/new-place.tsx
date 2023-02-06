import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewPlaceForm from "@/components/places/NewPlaceForm";
import { Place } from "@/components/places/PlacesList";

function NewPlace() {
  const router = useRouter();

  const addNewPlace = async (enteredData: Place) => {
    const response = await fetch("/api/new-place", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <React.Fragment>
      <Head>
        <title>Add a new place</title>
        <meta name="description" content="Add a new place on Krakow's map" />
      </Head>
      <NewPlaceForm onAddPlace={addNewPlace} />
    </React.Fragment>
  );
}

export default NewPlace;
