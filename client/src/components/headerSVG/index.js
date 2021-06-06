//dependencies
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
//css
import './index.css';

function HeaderSVG(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useEffect(() => {
        if (props.user) {
            setName('Welcome back' + ' ' + props.user.name)
        }
    }, [props.user])

    const logout = () => {
        localStorage.removeItem('user');
        if (props.user) {
            dispatch({ type: 'REMOVE_USER' })
        }
        setName('');
    }

    return (
        <div >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 1052 197">
                <rect id="Background_20_" className="st0" width="1052" height="197" />
                <g id="Stripes_Top_Right_5_">
                    <line className="st1" x1="1016.9" y1="154.7" x2="876" y2="20" />
                    <line className="st1" x1="1016.9" y1="121.5" x2="910.8" y2="20" />
                    <line className="st1" x1="1016.9" y1="88.2" x2="945.5" y2="20" />
                    <line className="st1" x1="1016.9" y1="55" x2="980.3" y2="20" />
                </g>
                <rect id="Frame_5_" x="35.1" y="19.7" className="st2" width="981.9" height="157.6" />
                <polygon id="Icon_Triangle_5_" className="st3" points="295.6,87.7 386.8,23 204.4,23 " />
                <rect x="46" y="94.4" className="st4" width="185" height="29.2" />
                <text transform="matrix(1.7107 0 0 1 46 115.8174)" className="st5 st6 st9">The Original</text>
                <rect x="177" y="134.7" className="st4" width="429" height="23.7" />
                <text transform="matrix(1.7107 0 0 1 177 154.7695)" className="st7 st8 st9">Craft beer </text>
                <path d="M309,44.3h-26c0.2-2.5,3.4-4.5,8-5.4v-9.3h9v9.2C305.1,39.5,308.8,41.7,309,44.3z" />
                <rect x="283" y="44.3" className="st9" width="26" height="29.6" />
                <ellipse className="st3" cx="-29" cy="-330.5" rx="3" ry="3.5" />
                <path className="st10" d="M309,44.6c0,1.2-0.7,2.3-1.9,3.2c-2.3,1.8-6.4,3-11.1,3s-8.8-1.2-11.1-3c-1.2-0.9-1.9-2-1.9-3.2
	c0-0.1,0-0.2,0-0.2h26C309,44.4,309,44.5,309,44.6z"/>
                <rect x="283" y="47.8" width="25" height="22.2" />
                {props.user ? (<text onClick={logout} transform="matrix(.5 0 0 1 880 154.7695)" className="st11 st8 st9" style={{ cursor: "pointer" }}>Logout</text>) :
                    (<text onClick={() => { window.location.href = '/login' }} transform="matrix(.5 0 0 1 880 154.7695)" className="st11 st8 st9" style={{ cursor: "pointer" }}>Login</text>)}

                <text transform="matrix(.5 0 0 1 700 154.7695)" className="st11 st8 st9">(555)-555-5555 </text>
                <text transform="matrix(.45 0 0 1 760 120)" className="st11 st8 st9">{name}</text>
                <text transform="matrix(.45 0 0 1 820 154)" className="st11 st8 st9" style={{ cursor: "pointer" }} onClick={()=>{window.location.href = '/account'}}>Account</text>
            </svg>
        </div>


    );
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(HeaderSVG);