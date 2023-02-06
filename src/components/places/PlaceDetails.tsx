import classes from './PlaceDetails.module.css';
import { Place } from './PlacesList';


function PlaceDetails(props: Place) {
    return <div className={classes.details}>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
}

export default PlaceDetails;