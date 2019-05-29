import React from 'react'
import IMAGE from '../banner.jpeg'
import '../style.css'


class TopBanner extends React.Component{
    render(){
        return(
            <div >
                <img className="banner" src={IMAGE} alt="" />
               
            </div>
        )
    }
}
export default TopBanner;