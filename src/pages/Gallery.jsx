import {useState, useEffect} from 'react'
import supabase from '../client'
import Crewmate from '../components/Crewmate';

const Gallery = () => {

    const {crewmates, updateCrewmates} = useState([])

    useEffect(() => {
        const getCrewmates = async () => {
            const crewmates = await supabase
            .from('crewmates')
            .
            updateCrewmates(crewmates => {
                [...crewmates, ]
            });

        }
        getCrewmates();
    }

    )

    return (
        <div className = "gallery">

        </div>
    );
}

export default Gallery;