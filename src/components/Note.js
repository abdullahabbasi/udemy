import React, { Component } from 'react'
import '../index.css'

class Note extends Component {
  render () {
    return (<div className="note">{this.props.note}</div>);
  }
}
export default Note;
