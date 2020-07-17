import React from 'react'
import Toolbar from '../../Components/Toolbar';
import StaticPreview from '../../Components/StaticPreview';
import NavBar from '../../Components/NavBar';
import Slider from '../../Components/Slider';


function Header() {
    return (
        <div>
            <Toolbar></Toolbar>
            <StaticPreview></StaticPreview>
            <NavBar></NavBar>
            <Slider></Slider>
        </div>
    )
}

export default Header
