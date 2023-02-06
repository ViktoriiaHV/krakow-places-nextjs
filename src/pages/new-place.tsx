import NewPlaceForm from "@/components/places/NewPlaceForm";
import { Place } from "@/components/places/PlacesList";
import { useRouter } from "next/router";

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

    router.push('/')
  };

  return <NewPlaceForm onAddPlace={addNewPlace} />;
}

export default NewPlace;
