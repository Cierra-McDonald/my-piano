import React, { Component } from 'react'
import './Keys.css'

export default class Keys extends Component {

    isNoteFlat = (note) => { 
        return note.length > 1; 
    }

    render() {
        let keyClassName = "key";
        const flatNote = this.isNoteFlat(this.props.note)
        if(flatNote) {
            keyClassName += " flat";  
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
