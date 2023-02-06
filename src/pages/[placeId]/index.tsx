import PlaceDetails from "@/components/places/PlaceDetails";

function PlaceDetailsPage() {
  // create component for displaying details

  return (
    <PlaceDetails
      image="https://discovercracow.com/sites/all/pliki/krakow-restaurants-2.jpg"
      title="Boscaiola"
      description="Some description"
      id="p1"
    />
  );
}

export async function getStaticProps(context: any) {
  console.log(context);
  return {
    props: {
      placeData: {
        image:
          "https://discovercracow.com/sites/all/pliki/krakow-restaurants-2.jpg",
        title: "Boscaiola",
        description: "Some description",
        id: "p1",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          placeId: "p1",
        },
      },
      {
        params: {
          placeId: "p2",
        },
      },
    ],
  };
}

export default PlaceDetailsPage;
