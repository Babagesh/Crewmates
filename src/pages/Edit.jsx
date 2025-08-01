import { useParams } from "react-router-dom";
import {supabase} from '../client'
import {useState, useEffect} from 'react'


const Edit = () => {

    const {id} = useParams();

    const [crewmateInfo, updateCrewmateInfo] = useState({
        Name: "",
        Speed: 0,
        Color: ""
    })

    useEffect(() => {
        const getCrewmateInfo = async () => {
            const {data} = await supabase
            .from('crewmates')
            .select()
            .eq('id', id);
            updateCrewmateInfo(data[0]);
        }
        getCrewmateInfo();
    }, [])

    const updateCrewmate = async(e) => {
        e.preventDefault();
        await supabase
        .from('crewmates')
        .update(crewmateInfo)
        .eq('id', id);
        window.location = ('/')

    }

    const deleteCrewmate = async (e) => {
        e.preventDefault();
        await supabase
        .from('crewmates')
        .delete()
        .eq('id', id)
        window.location = '/'
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        updateCrewmateInfo(crewmateInfo => (
            {...crewmateInfo, [name]:value}
        ))
    }
    return (
        <div className = "edit">
            <h1> Update your Crewmate :)</h1>
            <h2 style={{marginBottom: '2rem'}}> Current Crewmate Info</h2>
            <div className = "current-info" style={{ display: "flex", flexDirection: "row", gap: "2rem", marginBottom: '5rem'}}>
                {Object.entries(crewmateInfo).slice(2,5).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}:</strong> {value}
                    </div>
                ))}
            </div>
            
            <form > 
            <div className = 'options'>
                <div className = 'option'>
                    <label htmlFor='name'>Name:</label> <br />
                    <input type='text' placeholder = 'Enter crewmates name' id = 'name' name = 'Name' onChange = {handleChange}/>
                </div>
                <div className = 'option'>
                    <label htmlFor = 'speed'>Speed</label> <br />
                    <input type='number' placeholder = 'Enter speed in mph' id = 'speed' name = 'Speed' onChange={handleChange}/>
                </div>
                <div className = 'option'>
                    <h3> Color: </h3>
                    <input type='radio' id = 'red' value = 'red' name = 'Color' onChange={handleChange}/>
                    <label htmlFor = 'red'> Red </label> <br />
                    <input type = 'radio' id = 'blue' value = 'blue' name = 'Color' onChange={handleChange}/>
                    <label htmlFor = 'blue'> Blue </label> <br />
                    <input type = 'radio' id = 'green' value = 'green' name = 'Color' onChange={handleChange}/>
                    <label htmlFor = 'green'> Green </label> <br />
                    <input type = 'radio' id = 'yellow' value = 'yellow' name = 'Color' onChange={handleChange}/>
                    <label htmlFor = 'yellow'> Yellow </label> <br />
                    <input type = 'radio' id = 'purple' value = 'purple' name = 'Color' onChange={handleChange}/>
                    <label htmlFor = 'purple'> Purple </label> <br />
                </div>
            </div>
            <div className = 'submit-form'>
                <input type='submit' onClick={updateCrewmate} value = "Update crewmate"/>
                <input type='submit' onClick = {deleteCrewmate} value = "Delete crewmate"/>
            </div>
        </form>
        </div>
    );
}

export default Edit;