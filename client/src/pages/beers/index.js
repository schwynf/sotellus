//dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NotesAPI from '../../utils/comments.js';
//components
import Zoom from 'react-reveal/Zoom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BeerList from '../../components/beerList';
import NoteList from '../../components/noteList';
//css
import './index.css';

let note = {};
let notesService;

function Beers(props) {

    const [ABV, setABV] = useState([3, 10]);
    const [IBU, setIBU] = useState([10, 100]);
    const [beers, setBeers] = useState([]);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(async () => {
        let data = await axios.get(`https://api.punkapi.com/v2/beers/?abv_gt=${ABV[0]}&abv_lt=${ABV[1]}`);
        setBeers(data.data);
        if (props.user) {
            notesService = new NotesAPI();
            let comments = notesService.getNotes();
            if (comments) {
                setNotes(comments);
            }
        }
    }, [props.user]);

    const handleABVChange = (event, newValue) => {
        setABV(newValue);
    };
    const handleIBUChange = (event, newValue) => {
        setIBU(newValue);
    };

    const handleBeerApi = async (event) => {
        let data = await axios.get(`https://api.punkapi.com/v2/beers/?abv_gt=${ABV[0]}&abv_lt=${ABV[1]}&ibu_gt=${IBU[0]}&ibu_lt=${IBU[1]}`);
        setBeers(data.data);
        console.log(data.data)

    }

    const handleSave = (event) => {
        event.preventDefault();
        notesService.saveNote(note, notes, title, message);
        setNotes(JSON.parse(localStorage.getItem("comments")));
        setTitle("");
        setMessage("");
        note = {};
    }

    const handleDelete = (event) => {
        event.preventDefault();
        notesService.deleteNote(event, setNotes, notes)
    }

    const handleEdit = (event) => {
        event.preventDefault();
        let filteredNote = notesService.updateNote(event, notes);
        note = filteredNote[0];
        setTitle(note.title);
        setMessage(note.message);
    }

    return (
        <>
            <Grid container spacing={0} className='grid-container-beer'>
                <Grid item xs={12}>
                    <h1 id="h1-choose-beer">Choose Beer Type</h1>
                </Grid>
                <Grid item xs={12} sm={5} className='grid-item-slider'>
                    <Typography id='range-slider' gutterBottom>
                        Alcohol % = ABV  <br></br>{ABV[0]} - {ABV[1]}
                    </Typography>
                    <Slider
                        value={ABV}
                        onChange={handleABVChange}
                        valueLabelDisplay='auto'
                        aria-labelledby='range-slider'
                        color='secondary'
                        max={60}
                    />
                </Grid>
                <Grid item xs={12} sm={5} className='grid-item-slider'>
                    <Typography id='range-slider' gutterBottom>
                        Bitterness = IBU <br></br> {IBU[0]} - {IBU[1]}
                    </Typography>
                    <Slider
                        value={IBU}
                        onChange={handleIBUChange}
                        valueLabelDisplay='auto'
                        aria-labelledby="range-slider"
                        max={1100}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleBeerApi} style={{ marginTop: '20px', marginBottom: '40px' }} className='button-submit-beers' variant='contained' color='secondary'>
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={12} md={8} className='grid-item-beer-box'>
                    {beers.length ? (
                        beers.map((beer) => (
                            <BeerList key={beer.id} name={beer.name} image={beer.image_url} id="image-beers-api"
                                description={beer.description} abv={beer.abv} ibu={beer.ibu}></BeerList>
                        ))
                    ) : (<h3>No Beers to Display</h3>)}
                </Grid>
                <Grid item xs={12} md={4} className='grid-item-note-box'>
                    <h1>Notes</h1>
                    <TextField
                        style={{ clear: 'both' }}
                        id='filled-multiline-flexible'
                        label='Title'
                        multiline
                        rowsMax={4}
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                        variant='filled'
                    ></TextField>
                    <div style={{height:"2px"}}></div>
                    <TextField
                        id='filled-multiline-static'
                        label='Message'
                        multiline
                        rows={4}
                        value={message}
                        onChange={(event) => { setMessage(event.target.value) }}
                        variant='filled'
                    ></TextField>
                    <br></br>
                    <Button onClick={handleSave} variant='contained'>Save</Button>
                    {props.user ? (
                        <>
                            {notes.length ? (
                                notes.map((data) => (
                                    <NoteList id={data.id} pclass='p-notes-title' title={data.title} message={data.message} handleEdit={handleEdit} handleDelete={handleDelete}></NoteList>
                                ))
                            ) : (<h3>No notes to display</h3>)}
                        </>
                    ) : (<h3>Sign in to take notes</h3>)}
                </Grid>
            </Grid>
        </>
    );
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Beers);