import PlacesList from "@/components/places/PlacesList";
import { Place } from "@/components/places/PlacesList";
import { MongoClient } from "mongodb";

const DUMMY_PLACES = [
  {
    id: "p1",
    image:
      "https://discovercracow.com/sites/all/pliki/krakow-restaurants-2.jpg",
    title: "Boscaiola",
    address: "Szewska 10",
    description: "Some description",
  },
  {
    id: "p2",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/77/c0/20/interior.jpg",
    title: "Gavi",
    address: "plac Kossaka 6",
    description: "Some description",
  },
];

function HomePage({ places }: { places: Place[] }) {
  return <PlacesList places={places} />;
}

export async function getStaticProps() {
  
  const client = await MongoClient.connect(
    "mongodb+srv://victoria:Panda639244@cluster0.u1lrzeg.mongodb.net/krakowPlaces?retryWrites=true&w=majority"
  );
  const db = client.db();
  const placesCollection = db.collection("krakowplaces");
  const placesData = await placesCollection.find().toArray();
  
    client.close();
  
  return {
    props: {
      places: placesData.map(entry => ({
        id: entry._id.toString(),
        title: entry.title,
        image: entry.image
      })),
    },
    revalidate: 100,
  };
}

export default HomePage;
