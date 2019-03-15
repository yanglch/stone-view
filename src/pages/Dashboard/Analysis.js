import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import Style from './Analysis.less';

const { BgElement } = Element;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  render() {
    return (
      <BannerAnim
        prefixCls={Style['banner-user']}
        autoPlay
        dragPlay={false}
        autoPlaySpeed={6000}
        type={['gridBar', 'grid']}
      >
        <Element prefixCls={Style['banner-user-elem']} key="0">
          <BgElement key="bg" className={Style.bg} style={{ background: '#364D79' }} />
          <TweenOne
            className={Style['banner-user-title']}
            animation={{ y: 30, opacity: 0, type: 'from' }}
          >
            Ant Motion Banner1
          </TweenOne>
          <TweenOne
            className={Style['banner-user-text']}
            animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
          >
            The Fast Way Use Animation In React1
          </TweenOne>
        </Element>
        <Element prefixCls={Style['banner-user-elem']} key="1">
          <BgElement key="bg" className={Style.bg} style={{ background: '#64CBCC' }} />
          <TweenOne
            className={Style['banner-user-title']}
            animation={{ y: 30, opacity: 0, type: 'from' }}
          >
            Ant Motion Banner2
          </TweenOne>
          <TweenOne
            className={Style['banner-user-text']}
            animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
          >
            The Fast Way Use Animation In React2
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}

export default Analysis;
