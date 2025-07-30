import CREWMATES from '../assets/crewmates.png'
import SPACESHIP from '../assets/spaceship.png'

const Welcome = () => {
    return (
        <div className = "welcome-page">
            <h1>Welcome to the Crewmate Creator</h1>
            <img src={CREWMATES} height={500} width = {500}/>
            <img src={SPACESHIP} height={500} width = {500}/>
        </div>
    )
}

export default Welcome;