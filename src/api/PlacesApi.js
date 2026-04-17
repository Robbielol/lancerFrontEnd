const LOCAL_API_URL = 'https://api.lancerfind.com';

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

export const fetchRecentSearches = async () => {
    const response = await fetch(LOCAL_API_URL+'/api/website/', {
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