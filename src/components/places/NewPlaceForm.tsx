import { useState } from 'react';

import Card from '../ui/Card';
import classes from './NewPlaceForm.module.css';

type NewPlaceFormProps = {
    onAddPlace: any
}

type PlaceData = {
    title: string,
    image: string,
    address: string,
    description: string,
}

function NewPlaceForm(props: NewPlaceFormProps) {
  const [titleInput, setTitleInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  function submitHandler(event: any) {
    event.preventDefault();

    const placeData = {
      title: titleInput,
      image: imageInput,
      address: addressInput,
      description: descriptionInput,
    };

    props.onAddMeetup(placeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Place Name</label>
          <input type='text' required id='title' value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Place Photo</label>
          <input type='url' required id='image' value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' value={addressInput} onChange={(e) => setAddressInput(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows={5}
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Place</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPlaceForm;