/**
 * Created by Stackia <jsq2627@gmail.com> @ 4/3/2016 2:20 AM
 */
import './fish.css';
import React from 'react';
import s from 'react-prefixr';

export let FishImage = React.createClass({
  render() {
    return (
      <img src='//storage.keylol.com/a597b9ea3dd55355e5baaa91d8a87ce4.gif'/>
    );
  }
});

export let StaticFish = React.createClass({
  render() {
    let style = s({
      width: '300px',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    });
    return (
      <div style={style}>
        <FishImage/>
        <p style={{margin: 0, color: '#bbb', textAlign: 'center'}}>载入中</p>
      </div>
    );
  }
});

export let RotateFish = React.createClass({
  getDefaultProps() {
    return {
      roundTime: 6000,
      showDelay: 0
    }
  },
  getInitialState() {
    return {
      display: false
    };
  },
  componentDidMount() {
    setTimeout(() => {
      this.setState({display: true});
    }, this.props.showDelay);
  },
  render() {
    let style = s({
      width: '300px',
      height: '300px',
      position: 'absolute',
      top: '0',
      left: '0',
      display: this.state.display ? 'block' : 'none',
      animation: `fish-spin ${this.props.roundTime}ms infinite linear, fish-come ${this.props.roundTime / 10}ms`
    });
    return (
      <div style={style}>
        <FishImage/>
      </div>
    );
  }
});

export let TouchFish = React.createClass({
  getDefaultProps() {
    return {
      rotateFishNum: 10,
      roundTime: 6000
    }
  },
  render() {
    let rotateFishes = [];
    for (let i = 0; i < this.props.rotateFishNum; ++i) {
      rotateFishes.push(<RotateFish key={i} roundTime={this.props.roundTime}
                                    showDelay={this.props.roundTime/this.props.rotateFishNum*i}/>);
    }
    return (
      <div style={{position: 'relative'}}>
        <StaticFish/>
        {rotateFishes}
      </div>
    );
  }
});
