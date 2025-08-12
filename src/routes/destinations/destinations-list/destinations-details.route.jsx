import { useParams } from "react-router";
import styles from "./destinations-details.module.scss";
import data from './../../../data/japon.json';

// Pour la gestion des images -> Elle sont dynamique, possibilité : 
// - Stocker dans le serveur (Bonne pratique - Si server)
// - Stocker les images dans public et les utilisation en chaine de caractere dans la src de img
// - Tout importé a la main et faire une structure conditionnel (Usine a gaz - Fonctionnel mais mauvaise pratique)

export default function DestinationDetails() {

    const {id} = useParams();
    console.log('Vincent', id)
    
    const selectedDestination = data.destinations.find(dest => dest.id === parseInt(id));
    
    return (
        <>
            <div className={styles.container}>
                <p><strong>{selectedDestination.name}</strong></p>
                <p>{selectedDestination.location}</p>
                <img src={selectedDestination.image} alt={selectedDestination.name} />
                <p>{selectedDestination.description}</p>
            </div>
        </>
    )
}