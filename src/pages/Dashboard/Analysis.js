import React, { Component } from 'react';
import { connect } from 'dva';
import 'rc-banner-anim/assets/index.css';
import Carousel from "./Carousel";
import Content from "./Content";

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <Content/>
      </div>
    );
  }
}

export default Analysis;
