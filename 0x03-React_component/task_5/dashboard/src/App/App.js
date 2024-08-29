
import React, { Component } from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus orci eget sollicitudin scelerisque.</p>
        </BodySection>
      </div>
    );
  }
}

export default App;
