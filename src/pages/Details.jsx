import {supabase} from '../client'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

const Details = () => {
    const {id} = useParams();

    const [info, updateInfo] = useState({
        Name: "",
        Speed: 0,
        Color: "",
    })
    useEffect(() => {
        const getInfo = async () => {
            const {data} = await supabase
            .from('crewmates')
            .select()
            .eq('id', id)
            updateInfo(data[0]);
        }
        getInfo()
    }, [])
    return (
        <div>
            {
                Object.entries(info).map(([key, value]) => (
                    <div>
                        <strong>{key} : </strong> {value}
                    </div>
                ))
            }
        </div>
    );
}

export default Details;