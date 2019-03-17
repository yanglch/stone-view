import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {contentDataSource} from "./Content.source"

class Content extends React.PureComponent {
  getBlockChildren = (data) =>
    data.map((item, i) => {
      const children = item.children;
      return (
        <Col key={i.toString()} {...item}>
          <div {...children.icon}>
            <img src={children.icon.children} width="100%" alt="img" />
          </div>
          <h3 {...children.title}>{children.title.children}</h3>
          <div {...children.content}>{children.content.children}</div>
        </Col>
      );
    });

  render() {
    const listChildren = this.getBlockChildren(contentDataSource.block.children);
    return (
      <div {...contentDataSource.wrapper}>
        <div {...contentDataSource.page}>
          <div {...contentDataSource.titleWrapper}>
            {contentDataSource.titleWrapper.children.map((item, i) =>
              React.createElement(
                item.name.indexOf('title') === 0 ? 'h1' : 'div',
                { key: i.toString(), ...item },
                typeof item.children === 'string' &&
                item.children.match(
                  /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
                )
                  ? React.createElement('img', {
                    src: item.children,
                    height: '100%',
                    alt: 'img',
                  })
                  : item.children
              )
            )}
          </div>
          <OverPack {...contentDataSource.OverPack}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              {...contentDataSource.block}
              component={Row}
            >
              {listChildren}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
