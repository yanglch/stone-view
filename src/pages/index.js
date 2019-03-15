import React, { Component } from 'react';
import { connect } from 'dva';
import Carousel from '../components/Carousel/Carousel';

@connect()
class StoneIndex extends Component {
  render() {
    return (
      <div>
        <Carousel width={'80%'} height={400}>
          <img
            src={
              'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1552480485&di=38a49e020f8867b896d4c6a79b22a147&src=http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1506/19/c13/8656769_1434709159101.jpg'
            }
          />
          <img
            src={
              'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3645182395,1850330127&fm=26&gp=0.jpg'
            }
          />
        </Carousel>
      </div>
    );
  }
}

export default StoneIndex;
