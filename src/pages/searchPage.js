import { useState } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { PlaceCard } from '../components/PlaceCard';

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
        fetchRecentSearches();
    }, []);


    return (
        <div>
            <h1>LancerFind T1</h1>
            <p>Find local businesses in your area that need help!</p>

            <div className="recent-searches-grid">
                <h2>Recent Searches</h2>
                {recentSearches.map((search, index) => (
                    <RecentSearchCard key={index} search={search} />
                ))}
            </div>

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