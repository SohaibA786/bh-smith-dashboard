import Info from './mainComponents/infographics'
import Projects from './mainComponents/projects'
import Stats from './mainComponents/stats'
import './main.css'


function Main() {

    return (
        <>
            <div className='main'>
                <Info />
                <Stats />
                <Projects />
            </div>
        </>
    )
}

export default Main