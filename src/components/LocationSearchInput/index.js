import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (

        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
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
                    ? 'suggestion-item'
                    : 'suggestion-item--active';
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
}

export default LocationSearchInput;
