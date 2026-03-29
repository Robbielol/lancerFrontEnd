export const PlaceCard = ({ place }) => {
    return (
        <div className="card">
            <h3>{place.displayName.text}</h3>
            <p>{place.formattedAddress}</p>
            <p>{place.formattedPhoneNumber}</p>
            <p>{place.email}</p>
            <p>Rating: {place.rating} ⭐️</p>
            {place.websiteUri && (
                <a href={place.websiteUri} target="_blank" rel="noreferrer">
                    place.websiteUri
                </a>
            )}
        </div>
    );
};
