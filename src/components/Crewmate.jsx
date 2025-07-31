import Character from '../assets/character.png'
import {Link} from 'react-router'

const Crewmate = ({crewmateInfo}) => {
    return (
    <div className = "max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src = {Character} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Crewmate</div>
            <div className="mt-4 space-y-2">
                    <div className="font-bold">Name: </div>
                    <div className="font-bold">Speed: </div>
                    <div className="font-bold">Color: </div>
            </div>
        </div>
        <div className="flex justify-center pb-4">
                <Link to='/edit'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit Crewmate
                </button> 
                </Link>
        </div>
    </div>
    );
    
}

export default Crewmate;