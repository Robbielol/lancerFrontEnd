export const RecentSearchCard = ({search}) => {
    return (
        <div className="search-card">
            <p>{search.city}</p>
            <p>{search.businessType}</p>
        </div>
    );
};