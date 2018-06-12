import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

const COOKIE_KEY = 'NOTES';
class App extends Component {

  constructor () {
    super();
    this.state = {
      text: '',
      notes: []
    }
  }

  onAdd () {
    const {notes, text} = this.state;
    notes.push({text});
    this.setState({notes});
    bake_cookie(COOKIE_KEY, notes);
  }

  componentDidMount() {
    const notes = read_cookie(COOKIE_KEY);
    this.setState({notes});
  }
  clearNotes() {
    delete_cookie(COOKIE_KEY);
    this.setState({notes: []});
  }

  render () {
    return (<div>
          Notes
          <Form inline>
            <FormControl onChange={ event => {this.setState({ text: event.target.value})} }/>
            {' '}
            <Button onClick={ ()=> {this.onAdd(this.state.text);} }>Submit</Button>
            {' '}
            <Button onClick={ () => { this.clearNotes();}}> Clear </Button>
          </Form>
          { this.state.notes.map((note, index) => { return (<Note key={index} note={note.text}></Note>); }) }

      </div>);
  }
}

export default App;
