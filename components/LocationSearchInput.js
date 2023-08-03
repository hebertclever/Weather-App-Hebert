import React from 'react';





const LocationSearchInput = ({ onSearch }) => {

  const handleSelect = ({ value }) => {
    
    geocodeByPlaceId(placeId)
      .then(results => getLatLng(results[0]))
      .then(latLng => onSearch(latLng.lat, latLng.lng))
      .catch(error => console.error('Error', error));
  };

  return (
    <GooglePlacesAutocomplete
      onSelect={handleSelect}
    />
  );
}

export default LocationSearchInput;
