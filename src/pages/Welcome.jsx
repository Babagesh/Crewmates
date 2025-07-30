import CREWMATES from '../assets/crewmates.png'
import SPACESHIP from '../assets/spaceship.png'

const Welcome = () => {
    return (
        <div className = "welcome-page">
            <h1>Welcome to the Crewmate Creator</h1>
            <h3> Here is where you can create your very own set of crewmates before sending them off into space!</h3>
            <img src={CREWMATES} height={500} width = {500}/>
            <img src={SPACESHIP} height={500} width = {500}/>
        </div>
    )
}

export default Welcome;