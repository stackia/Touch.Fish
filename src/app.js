/**
 * Created by Stackia <jsq2627@gmail.com> @ 4/3/2016 2:09 AM
 */
'use strict';
import React from 'react';
import {TouchFish} from './fish';

export let App = React.createClass({
  getDefaultProps() {
    return {
      initialStates: {
        rotateFishNum: null,
        roundTime: null
      }
    };
  },
  getInitialState() {
    return this.props.initialStates;
  },
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  componentDidMount() {
    if (!this.state.rotateFishNum) {
      this.setState({rotateFishNum: this.randomInt(6, 20)});
    }
    if (!this.state.roundTime) {
      this.setState({roundTime: this.randomInt(4000, 12000)});
    }
    setTimeout(() => {
      location.href = 'https://www.keylol.com';
    }, this.props.roundTime + 6000);
  },
  render() {
    return (
      <a href="https://www.keylol.com">
        <TouchFish rotateFishNum={this.state.rotateFishNum} roundTime={this.state.roundTime}/>
      </a>
    );
  }
});
