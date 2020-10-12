import React, { useState, useEffect, useContext } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { AppContext } from '../../App';


const LocationSearchInput = () => {
  const {state, dispatch} = useContext(AppContext);

  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' })

  const handleChange = address => {
    setAddress(address);
  };

  useEffect(() => {
    const { lat, lng } = coordinates;
    dispatch({ type: 'changeLocation', payload: { lat, lng } });
  }, [coordinates]);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        const { lat, lng } = latLng;
        setCoordinates({ lat, lng });
      })
      .catch(error => console.error('Error', error));
  };

  return (

      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ display: 'flex', flexDirection: 'column', zIndex: '99' }}>
            <input
              {...getInputProps({
                placeholder: 'Digite uma localização...',
                className: 'location-search-input',
              })}
            />

            <div style={{ zIndex: '99', position: 'absolute', marginTop: '40px'}}>
              {loading && <div>Procurando...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer', color: '#000', padding: '8px', border: '1px solid black'}
                  : { backgroundColor: '#ffffff', cursor: 'pointer', color: '#000', padding: '8px', border: '1px solid black'};
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
          </div>
          </div>

        )}
      </PlacesAutocomplete>
  );
}

export default LocationSearchInput;
