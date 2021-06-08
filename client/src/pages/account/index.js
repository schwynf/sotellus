//dependencies
import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import User from '../../utils/user.js';
//components
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//css
import './index.css'

let user;

function Account(props) {
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('Email');

    useEffect(()=>{
        if(props.user){
            user = new User(props.user.name,props.user.email);
            setName(user.name);
            setEmail(user.email);
        }else{
            setName('');
            setEmail('');
        }
    },[props.user])

    const handleEditName = (event) =>{
        event.preventDefault();
        user.updateNameAndEmail(props,name,email);
    }

    return (
        <>
            <Grid container spacing={0} className='grid-container-beer'>
                <div className='div-paper-account'>
                        <Paper elevation={3} className='paper-account'>
                            <h2 className='h2-account-title'>Account</h2>
                            {props.user ? (<><TextField onChange={(event)=>{setName(event.target.value)}} id="outlined-basic" label="name" value={name} variant="outlined" /><br></br><br></br>
                            <TextField onChange={(event)=>{setEmail(event.target.value)}} id="outlined-basic" label="email" value={email} variant="outlined" /><br></br>
                            <Button onClick={handleEditName} style={{marginTop:'10px'}} variant="contained">Save</Button></>):(<div>Login for account information</div>)}
                        </Paper>
                </div>
            </Grid>
        </>
    );
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Account);