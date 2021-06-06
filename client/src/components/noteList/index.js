//dependencies
import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
//css
import './index.css';

function NoteList(props) {
    return (
        <>
            <div key={props.id} className={props.divclass}>
                <p className={props.pclass}>{props.title}</p>
                <p>{props.message}</p>
                <button onClick={props.handleEdit} id={props.id}>Edit</button>
                <button onClick={props.handleDelete} id={props.id}>Delete</button>
            </div>
        </>
    );
}

export default NoteList;