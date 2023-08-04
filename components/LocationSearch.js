import React, { useState } from 'react';


const LocationSearch = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const GoogleAPI = 'AIzaSyA_GwRHzazPmJXsV3IA2JhsjWYlmPHuids'

    const handleSearch = async (e) => {
        if (e.key && e.key !== 'Enter') {
            return;
        }

        setLoading(true);
        try {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GoogleAPI}`;

            const response = await fetch(url);
            const dataGeoLocation = await response.json();

            if (dataGeoLocation.results.length === 0) {
                console.log('No results found for this location.');
                return;
            }

            const { lat, lng } = dataGeoLocation.results[0].geometry.location;
            onSearch(lat, lng);
        } catch (error) {
            console.error('Error fetching location data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <div className="flex flex-row p-5">
                <input className='p-3'
                    type="text"
                    placeholder="Search City, State, Zip Code "
                    value={city}
                    onKeyDown={handleSearch}
                    onChange={(e) => setCity(e.target.value)}
                />
                
            </div>
        </section>
    );
};

export default LocationSearch;
