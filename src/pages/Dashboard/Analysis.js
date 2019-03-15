import React, { Component } from 'react';
import { connect } from 'dva';
import 'rc-banner-anim/assets/index.css';
import Carousel from "./Carousel";

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  render() {
    return (
      <Carousel/>
    );
  }
}

export default Analysis;
