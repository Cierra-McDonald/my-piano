import React, { Component } from 'react'
import './Piano.css'
import Keys from '../Presentation/Keys'
import _ from 'lodash';
import { NOTES } from '../global/Notes'

export default class Piano extends Component {
    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                 <Keys
                    key={index}
                    note={note}
                />
                );
            }); 
        return (
                <div className="piano">
                    {keys}
                </div>
        )
    }
}
