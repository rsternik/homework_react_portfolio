import passgen from './assets/img/passgen.png'
import codequiz from './assets/img/codequiz.png'
import dayplanner from './assets/img/dayplanner.png'
import weatherdashboard from './assets/img/weatherDashboard.png'

const Projects = () => {
    return ( 
        <div className='myWork'>
            <div className = "card">
                <h3>Password Generator</h3>
                <a href="https://github.com/rsternik/Homework_Password_Generator"><img className="img1"
                        src={ passgen } alt="Password Generator"/></a>
            </div>

            <div className="card">
                <h3>Day Planner</h3>
                <a href="https://github.com/rsternik/Homework_Day_Planner"><img className="img3"
                        src= { dayplanner } alt="Day Planner"/> </a>
            </div>
            <div className="card">
                <h3>Code Quiz</h3>
                <a href="https://github.com/rsternik/Homework_Code_Quiz">
                    <img className="img2" src={ codequiz } alt="Code Quiz" />
                </a>
            </div>
            <div className="card">
                <h3>Weather Dashboard</h3>
                <a href="https://github.com/rsternik/Homework_Weather_Dashboard"><img className="img4"
                        src=  { weatherdashboard } alt="Weather Dashboard" /></a>
            </div>
        </div>
     );
}
 
export default Projects;