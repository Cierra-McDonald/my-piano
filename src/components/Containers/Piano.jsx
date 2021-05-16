import React, { Component } from 'react'
import './Piano.css'
import Keys from '../Presentation/Keys'
import _ from 'lodash';
import { KEY_T0_NOTE, NOTES, VALID_KEYS } from '../global/Notes'


class Piano extends Component {

    state = { 
        pressedKeys : [],
    }

    componentDidMount = () => { 
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (e) => { 
        if(e.repeat) { 
            return;
        }
        const key = e.key;
        const updateKeyPress = [...this.state.pressedKeys];
        if(!updateKeyPress.includes(key) && VALID_KEYS.includes(key)) { 
            updateKeyPress.push(key);
        } 
 
        this.setState({
            pressedKeys: updateKeyPress
        })
        this.playNote(KEY_T0_NOTE[key]);

    }


    handleKeyUp = (e) => { 
        const index = this.state.pressedKeys.indexOf(e.key);
        if(index > -1 ) { 
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1)
            }));
        }

    }

    playNote = (note) => {
        if (!_.isEmpty(note)) {
          const noteAudio = new Audio(document.getElementById(note).src);
          noteAudio.play();
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
        const audioFiles = _.map(NOTES, (note, index) => { 
            return (
                <audio
                    id={note}
                    key={index}
                    src={`../../notes/${note}.mp3`}/>
            )
        });
        return (
        <div>
            <div className="piano">
                 {keys}
            </div>
            <div>
                {audioFiles}
            </div>
        </div>
        )
    }
}

export default Piano;