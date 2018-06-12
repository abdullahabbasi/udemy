import React from 'react';
import { mount } from 'enzyme';
import App from './components/App'

describe('tet App component', () => {
  var app = mount(<App />)
  it ('renders app title', () => {
      //console.log(app.debug());
      expect(app.find('Button').at(0).text()).toEqual("Submit");
  });

  describe('rendering App form', () => {
    it('rendering form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });
  });

  describe('App form behaviour', () => {
    let testNote = 'this is a test note';
    beforeEach(() => {
      //console.log(app.debug());
      app.find('FormControl').simulate('change', { target: { value: testNote }});

    });

    it('updates the text state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    it('check submit', () => {
        app.find('Button').at(0).simulate('click');
        console.log(app.state());
        expect(app.state().notes).toEqual([{text: testNote}]);
    });
  });
})
