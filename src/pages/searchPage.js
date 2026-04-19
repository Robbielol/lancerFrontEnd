import { useState, useEffect } from 'react';
import { usePlaces, useRecentSearches } from '../hooks/usePlaces';
import { PlaceCard } from '../components/PlaceCard';
import { RecentSearchCard } from '../components/RecentSearchCard';

export const SearchPage = () => {
    //Local state for the input forms
    const [businessType, setBusinessType] = useState('');
    const [location, setLocation] = useState('');

    // Custom hook logic
    const { places, isLoading, error, searchPlaces } = usePlaces();
    const { recentSearches, isLoadingRecent, errorRecent, fetchRecentSearches } = useRecentSearches();

    const handleSearch = (e) => {
        e.preventDefault();
        // Trigger the API call
        searchPlaces(location, businessType, 10000);
    };

    useEffect(() => {
        console.log("I ran");
        fetchRecentSearches();
    }, []);


    return (
        <div>
            <h1>LancerFind T1</h1>
            <p>Find local businesses in your area that need help!</p>

            {/* 3. The Loading State: Show this while the backend is working */}
            {isLoadingRecent && (
                <div className="loading-spinner">
                    <p>Loading recent searches...</p>
                </div>
            )}

            {/* 4. The Error State: Show this if the C# server crashes */}
            {errorRecent && (
                <div className="error-banner">
                    <p>Oops! Could not load recent searches: {errorRecent}</p>
                </div>
            )}

            {/* 5. The Success State: Only show the list if we are done loading and have no errors */}
            {!isLoadingRecent && !errorRecent && recentSearches.length > 0 && (
                <div className="recent-searches-box">
                    <h2>Recent Searches</h2>
                    <ul>
                        {recentSearches.map((search) => (
                            // Use the MongoDB generated ID as your React key!
                            <RecentSearchCard key={search.id} search={search}/>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSearch}>
                <input
                    placeholder="What are you looking for? (e.g. Barbers)"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                />
                <input
                    placeholder="Where? (e.g. Seattle)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            <div className="results-grid">
                {places.map((place, index) => (
                    // 4. Pass the data to your dumb component
                    <PlaceCard key={index} place={place} />
                ))}
            </div>
        </div>
    );
};