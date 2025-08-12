import { Navigate, useParams } from "react-router";
import styles from "./destinations-details.module.scss";
import data from './../../../data/japon.json';

// Pour la gestion des images -> Elles sont dynamiques, possibilité : 
// - Stocker dans le serveur (Bonne pratique - Si server)
// - Stocker les images dans public et les utiliser en chaine de caracteres dans la src de img
// - Tout importer a la main et faire une structure conditionnelle (Usine a gaz - Fonctionnel mais mauvaise pratique)

export default function DestinationDetails() {

    // Gérer la sélection des cartes
    const { id } = useParams();
    const selectedDestination = data.destinations.find(dest => dest.id === parseInt(id));

    return (
        <>
            {
                !selectedDestination && (
                    <Navigate to="/not-found" />
                )
            }
            {
                selectedDestination && (
                    <div className={styles.container}>
                        <p><strong>{selectedDestination.name}</strong></p>
                        <p>{selectedDestination.location}</p>
                        <img src={selectedDestination.image} alt={selectedDestination.name} />
                        <p>{selectedDestination.description}</p>
                    </div>
                )
            }

        </>
    )
}