import React from 'react';
import HomeImage from "../../assets/images/home2.jpg";

class Home extends React.Component {
    render() {
        return <>
            <div  className='art-gallery-container hero'>
                <span className='art-gallery-span art-gallery-center'>IMAN OTHMAN</span>
                <button className='uk-button uk-button-default art-gallery-button art-gallery-center'>GALLERY</button>
            </div>
        </>
    }
}

export default Home;