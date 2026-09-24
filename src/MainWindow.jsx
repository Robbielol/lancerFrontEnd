import React, { useState } from 'react';

function MainWindow() {
    const [googlePlace, setGooglePlace ] = useState({});
    const [googlePlaceList, setGooglePlaceList] = useState([googlePlace]); 
    const [city, setCity] = useState('');
    const [businessType, setBusinessType] = useState('');

    

    return (
        <div>
            <h1>Main Window</h1>
            <div>
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <input type="text" placeholder="Business Type" value={businessType} onChange={(e) => setBusinessType(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {googlePlaceList.map((place, index) => (
                    <div key={index}>
                        <h2>{place.name}</h2>
                        <p>{place.address}</p>
                    </div>
                ))}
            </div> 
        </div>
    );
}

export default MainWindow;