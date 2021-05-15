import React, { Component } from 'react'
import _ from 'lodash'
import { NOTE_TO_KEY } from '../global/Notes';
import './Keys.css'

export default class Keys extends Component {

    isNoteFlat = (note) => { 
        return note.length > 1; 
    }

    isKeyPressed = (note, pressedKey) => {
        return _.includes(pressedKey, NOTE_TO_KEY[note]);
}

    render() {
        let keyClassName = "key";
        const flatNote = this.isNoteFlat(this.props.note)
        if(flatNote) {
            keyClassName += " flat";  
        }
        const pressedNote = this.isKeyPressed(this.props.note, this.props.pressedKeys)
        if(pressedNote) { 
            keyClassName += " pressed"
        }

        let key;
        if(flatNote) { 
            key = <div className={keyClassName}></div>
        } else{ 
            key = (
                <div className={keyClassName}>
                    <div className="key-text">{this.props.note.toUpperCase()}</div>
                </div>
            )
        }

        return key;
    }
}
