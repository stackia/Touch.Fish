/**
 * Created by Stackia <jsq2627@gmail.com> @ 4/3/2016 2:09 AM
 */
'use strict';
import React from 'react';
import {TouchFish} from './fish';
import {connect} from 'react-redux';
import * as actions from '../actions';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default connect((state) => {
  return {
    rotateFishNum: state.rotateFishNum,
    roundTime: state.roundTime
  };
}, (dispatch) => {
  return {
    onRandomFishes: () => {
      dispatch(actions.setRotateFishNum(randomInt(6, 20)));
      dispatch(actions.setRoundTime(randomInt(4000, 12000)));
    }
  };
})(React.createClass({
  getDefaultProps() {
    return {
      roundTime: 6000,
      onRandomFishes() {
      }
    };
  },
  componentWillMount() {
    if (!this.props.rotateFishNum)
      this.props.onRandomFishes();
  },
  componentDidMount() {
    // this.timeoutId = setTimeout(() => {
    //   location.href = 'https://www.keylol.com';
    // }, this.props.roundTime + 6000);
  },
  compoentWillUnmount() {
    clearTimeout(this.timeoutId);
  },
  render() {
    return (
      <a href="https://www.keylol.com">
        <TouchFish/>
      </a>
    );
  }
}));
