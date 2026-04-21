import './components.css';

export const RecentSearchCard = ({search}) => {
    return (
        <div className="search-card">
            <p>{search.businessType}, {search.city}</p>
        </div>
    );
};