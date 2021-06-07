//dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Toolbar from '@material-ui/core/Toolbar';
import HeaderSVG from '../headerSVG';
import Switch from '@material-ui/core/Switch';
//css
import './index.css';

const sections = [
    { title: 'Home', url: '/' },
    { title: 'Beers', url: '/beers' },
    { title: 'Breweries', url: '#' }
];

function Header(props) {
    const [mode, setMode] = useState(false);
    const [color, setColor] = useState('black')

    useEffect(() => {
        setMode(props.isLight)
        if (props.isLight) {
            setColor('white')
        } else {
            let mode = JSON.parse(localStorage.getItem("mode"))
            if(mode && mode.color){
                props.dispatch({ type: 'SWITCH_MODE' });
            }else{
                setColor('black')
            }
        }
    }, [props.isLight])

    const handleChange = () => {
        props.dispatch({ type: 'SWITCH_MODE' });
        localStorage.setItem('mode', JSON.stringify({ color: !mode }));
    };


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
                        style={{ color: color, marginRight: '10px' }}
                    >
                        {section.title}
                    </Link>
                ))}
                <Switch
                    checked={mode}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Toolbar>
        </div>
    );
}

const mapStateToProps = state => {
    return { user: state.user, isLight: state.isLight }
}
export default connect(mapStateToProps)(Header);