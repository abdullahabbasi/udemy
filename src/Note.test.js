import React from 'react';
import { mount } from 'enzyme';
import Note from './components/Note';

const props = {note:'test message'};
describe('Note', () => {
  let note = mount(<Note {...props} />);
  it('renders note component', () => {
    //console.log(note.debug());
    expect(note.find('.note').text(), props.note);
  });
});
