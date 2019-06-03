import React from 'react'
//import Navbar from './components/navbar';
import TopBanner from './components/topbanner';
import AboutMe from './components/aboutme'
import Education from './components/education'
import Experiance from './components/experiance'
import Projects from './components/projects'
import Interests from './components/interest'
import Navbar from './components/NewNavbar'


class MainSite extends React.Component{
    render(){
        return(
            <div>
                <TopBanner/>
                <Navbar/>
                
                <AboutMe/>
                <Education/>
                <Experiance/>
                <Projects/>
                <Interests/>
            </div>
        )
    }
}

export default MainSite;