const LOCAL_API_URL = 'http://Lancer-api-env.eba-rv3sqeng.us-east-1.elasticbeanstalk.com';

export const handleSearch = async (businessType, city, distance) => {
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