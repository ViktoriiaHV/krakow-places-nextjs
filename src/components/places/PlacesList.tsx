import PlaceItem from "./PlaceItem";
import classes from "./PlacesList.module.css";

type PlacesListProps = {
  places: Array<Place>;
};

export type Place = {
  id: string;
  image?: string;
  title: string;
  address?: string;
  description?: string;
};

function PlacesList(props: PlacesListProps) {
  return (
    <ul className={classes.list}>
      {props.places.map((meetup) => (
        <PlaceItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default PlacesList;
