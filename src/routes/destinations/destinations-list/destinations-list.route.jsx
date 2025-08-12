import { useState } from "react";
import data from "../../../data/japon.json";
import styles from "./destinations-list.module.scss";
import { Link } from "react-router";


// ==== Composant principal ====
export default function DestinationsList() {
    // console.log("destinations", data);
    const destinations = data.destinations;
    // console.log("destinations tableau", destinations);

    return (
        <>
            <h3 className={styles.title}>Destinations liste</h3>
            <div className={styles.container_list}>
                {
                    destinations.map(destination =>
                        <CardsDestination
                            key={destination.id}
                            destination={destination} />)
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