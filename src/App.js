import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
// import { connect } from 'react-redux';
// import { manageRestaurants } from './reducers/manageRestaurants'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

// function mapDispatchToProps(){
//   return 'hi'
// }

// export default connect(mapDispatchToProps, {manageRestaurants})(App);

// Write a mapDispatchToProps() function that allows us to pass dispatched actions as props.

// Remember that mapDispatchToProps() is provided dispatch as an argument (passed in by connect when called), so we can wrap an imported action with dispatch within mapDispatchToProps(). Don't forget that the action provided in actions/restaurants.js is a function that must be called in order to return the action object.