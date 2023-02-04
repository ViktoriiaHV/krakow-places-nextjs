import PlacesList from "@/components/places/PlacesList";

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

function HomePage() {
  return <PlacesList places={DUMMY_PLACES} />;
}

export default HomePage;
