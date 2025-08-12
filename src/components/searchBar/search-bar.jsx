import styles from "./search-bar.module.css";

export default function SearchBar({ query, setSearchParams, destinations }) {
    // Utiliser un Set pour éliminer les doublons
    const uniqueLocations = [...new Set(destinations.map(destination => destination.location))];
    // Gérer le changement de sélection
    const handleLocationChange = (event) => {
        setSearchParams({ query, location: event.target.value });
    };

    
    return (
        <>
            <div className={styles.container_searchBar}>
                <label htmlFor="searchbar">Rechercher une ville:</label>
                <input
                    type="text"
                    value={query}
                    onChange={(event) => setSearchParams({ query: event.target.value })}
                />
                {/* https://reactrouter.com/api/hooks/useSearchParams#setsearchparams-function */}
                <select
                    name="locations"
                    id="locations"
                    onChange={handleLocationChange}
                >
                    <option value="">-- Choisissez votre localisation --</option>
                    {
                        uniqueLocations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}
