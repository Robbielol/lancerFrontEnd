import { useState } from 'react';
import { handleSearch, handleRecentSearches } from '../api/PlacesApi';

export const usePlaces = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchPlaces = async (location, query, distance) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await handleSearch(location, query, distance);
            setPlaces(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { places, isLoading, error, searchPlaces };
};

export const useRecentSearches = () => {
    const [recentSearches, setRecentSearches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRecentSearches = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await handleRecentSearches();
            console.log(data);
            setRecentSearches(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { recentSearches, isLoading, error, fetchRecentSearches };
};
