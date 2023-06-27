import {Component} from 'react';
import WonderPush from './WonderPush';

export default class WonderPushComponent extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    WonderPush.push(['init', {...this.props.options, integrator: 'react-wonderpush-1.0.9'}]);
  }
  render() {
    return this.props.children;
  }
}
