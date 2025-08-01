import {useState, useEffect} from 'react'
import {supabase} from '../client'
import Crewmate from '../components/Crewmate';

const Gallery = () => {

    const [crewmates, updateCrewmates] = useState([])

    useEffect(() => {
        const getCrewmates = async () => {
            const {data} = await supabase
            .from('crewmates')
            .select()
            .order('created_at', {ascending: false});
            updateCrewmates(data);

        }
        getCrewmates();
    }, [])

    return (
        <div className = "gallery">
            {
                crewmates.map(crewmate => 
                    <Crewmate 
                        key={crewmate.id}
                        crewmateInfo = {crewmate}
                    />
                )
            }
            
        </div>
    );
}

export default Gallery;