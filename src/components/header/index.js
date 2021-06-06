//dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import Toolbar from '@material-ui/core/Toolbar';
import HeaderSVG from '../headerSVG';
//css
import './index.css';

const sections = [
    { title: 'Home', url: '/' },
    { title: 'Beers', url: '/beers' },
    { title: 'Breweries', url: '#' }
];

function Header() {
    return (
        <div className="nav">
            <div className='div-svg-header'>
                <HeaderSVG></HeaderSVG>
            </div>
            <Toolbar component='nav' variant='dense' className='toolbar'>
                {sections.map((section) => (
                    <Link
                        key={section.title}
                        to={section.url}
                        style={{color:'black', marginRight:'10px'}}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </div>
    );
}

export default Header;