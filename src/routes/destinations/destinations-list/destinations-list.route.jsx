import data from "../../../data/japon.json";
import styles from "./destinations-list.module.scss";
import { Link, useParams, useSearchParams } from "react-router";
import SearchBar from "../../../components/searchBar/search-bar";


// ==== Composant principal ====
export default function DestinationsList() {
    // DB
    const destinations = data.destinations;
    
    // Params & searchParams
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const location = searchParams.get("location");
    
    // Filtered DB
    const destinationFiltered = destinations.filter(destination => {
        const matchesQuery =  destination.name.toLowerCase().includes(query.toLowerCase());
        const matchesLocation = location ? destination.location === location : true;

        return matchesQuery && matchesLocation;
    });

    // Choice DB
    const listToRender = query || location ? destinationFiltered : destinations;

    return (
        <>
            <h3 className={styles.title}>Destinations liste</h3>
            <SearchBar
                query={query}
                setSearchParams={setSearchParams}
                destinations={destinations}
            />
            <div className={styles.container_list}>
                {
                    listToRender.map(destination => (
                        <CardsDestination
                            key={destination.id}
                            destination={destination}
                        />
                    ))
                }
            </div>
        </>
    )
}

// ==== Composant card ====
const CardsDestination = ({ destination }) => {

    return (
        <Link to={`/destination/${destination.id}`} className={styles.card}>
            <p className={styles.title}><strong>{destination.name}</strong></p>
            <img src={destination.thumbnail} alt={destination.name} />
            <p>{destination.shortDescription}</p>
        </Link>
    )
}