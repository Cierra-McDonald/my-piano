import React, { Component } from 'react'
import './Piano.css'
import Keys from '../Presentation/Keys'
import _ from 'lodash';
import { NOTES, VALID_KEYS } from '../global/Notes'

class Piano extends Component {

    state = { 
        pressedKeys : [],
    }

    componentDidMount = () => { 
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (e) => { 
        console.log(e)
        if(e.repeat) { 
            return;
        }
        const key = e.key;
        const updateKeyPress = [...this.state.pressedKeys];
        if(!updateKeyPress.includes(key) && VALID_KEYS.includes(key)) { 
            updateKeyPress.push(key);
        } else {
            alert('Oops! the key you pressed is not valid!')
        }
        this.setState({
            pressedKeys: updateKeyPress
        })
    }


    handleKeyUp = (e) => { 
        const index = this.state.pressedKeys.indexOf(e.key);
        if(index > -1 ) { 
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1)
            }));
        }

    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                 <Keys
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
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

export default Piano;