const LOCAL_API_URL = 'https://localhost:7252';

export const handleSearch = async (city, businessType, distance) => {
    const response = await fetch(LOCAL_API_URL+'/api/website/'+city+'/'+businessType+'/'+distance, {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        console.error('Error fetching data:', response.statusText);
    }

    return await response.json();
}

export const handleRecentSearches = async () => {
    const response = await fetch(LOCAL_API_URL+'/api/website/searches', {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        console.error('Error fetching data:', response.statusText);
    }

    return await response.json();
}