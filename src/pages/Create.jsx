import {useState} from 'react'
import {supabase} from '../client'

const Create = () => {

    const [crewmateOptions, updateCrewmateOptions] = useState({
        Name : "",
        Speed: 0,
        Color: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        updateCrewmateOptions(crewmateOptions => (
            {...crewmateOptions, [name]:value}
        ))
    }
    const createCrewmate = async (e) => {
        e.preventDefault();
        await supabase
        .from('crewmates')
        .insert(crewmateOptions)
        window.location = "/"
    }
    return (
        <div className = "create">
            <h1> Create a New Crewmate</h1>
            <form > 
                <div className = 'options'>
                    <div className = 'option'>
                        <label for='name'>Name:</label> <br />
                        <input type='text' placeholder = 'Enter crewmates name' id = 'name' name = 'Name' onChange = {handleChange}/>
                    </div>
                    <div className = 'option'>
                        <label for = 'speed'>Speed</label> <br />
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
                    <input type='submit' onClick={createCrewmate} value = "Create crewmate"/>
                </div>
            </form>
        </div>
    );
}

export default Create;