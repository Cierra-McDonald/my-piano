import React, { Component } from 'react'
import './Piano.css'
import Keys from '../Presentation/Keys'

export default class Piano extends Component {
    render() {
        return (
            <div className="piano">
               <Keys/>
               <Keys/>
               <Keys/>
            </div>
        )
    }
}
