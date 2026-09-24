import './components.css';

export const RecentSearchCard = ({search, onSearchClick }) => {
    return (
        <button type='submit' className="search-card" onClick={() => onSearchClick(search.city, search.businessType, 10000)}>
            {search.businessType}, {search.city}
        </button>
    );
};