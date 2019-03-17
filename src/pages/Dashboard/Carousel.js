import React from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import Style from "./Carousel.less";

const { Element, Arrow, Thumb } = BannerAnim;
const { BgElement } = Element;


class Carousel extends React.Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552840461361&di=a53f22ec5b26bad3dbe8e2c86e475885&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F31%2F32%2F82bOOOPIC2d_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552840360915&di=a8e3773cf7ccea85f725d55bbf7e137e&imgtype=0&src=http%3A%2F%2Fwww.jituwang.com%2Fuploads%2Fallimg%2F110812%2F2135-110Q209594419.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552840449423&di=5d3814295d29fe0f4426e0f8da884f99&imgtype=0&src=http%3A%2F%2Fpic13.nipic.com%2F20110309%2F6884045_115142389000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552840461360&di=006bebf6ccbd1a1905e3150dc315907c&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F98%2F03%2F15980304-026030da2910d1d50348d7963815fd0c-0.jpg',
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((img, i) =>
      <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
    );
    return (
      <BannerAnim onChange={this.onChange} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                  prefixCls={Style["custom-arrow-thumb"]}
                  type={['gridBar', 'grid']}
                  autoPlay
                  dragPlay={false}
                  autoPlaySpeed={6000}
      >
        {this.imgArray.map((item)=>{
          return (
            <Element key="aaa" prefixCls={Style["banner-user-elem"]}>
              <BgElement key="bg" className={Style.bg} style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              />
              <TweenOne className={Style["banner-user-title"]} animation={{ y: 30, opacity: 0, type: 'from' }}>
                XXX石材销售公司
              </TweenOne>
              <TweenOne className={Style["banner-user-text"]} animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                打造川内最优惠价格
              </TweenOne>
            </Element>
          );
        })
        }

        <Arrow arrowType="prev" key="prev" prefixCls={[Style["user-arrow"],Style.prev].join(" ")} component={TweenOne} onMouseEnter={this.prevEnter}
               onMouseLeave={this.prevLeave}
               animation={{ left: this.state.prevEnter ? 0 : -120 }}
        >
          <div className={[Style["prev-arrow"], Style.arrow].join(" ")}></div>
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }} appear={false} className={Style["img-wrapper"]} component="ul">
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls={[Style["user-arrow"], Style.next].join(" ")} component={TweenOne}
               onMouseEnter={this.nextEnter}
               onMouseLeave={this.nextLeave}
               animation={{ right: this.state.nextEnter ? 0 : -120 }}
        >
          <div className={[Style["next-arrow"], Style.arrow].join(" ")}></div>
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }} appear={false} className={Style["img-wrapper"]} component="ul">
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>
        <Thumb prefixCls={Style["user-thumb"]} key="thumb" component={TweenOne} animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}>
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    );
  }
}

export default Carousel;
