import React from 'react';
import style from "./less/antMotionStyle.less"

export const contentDataSource = {
  wrapper: { className: [style['home-page-wrapper'], style["content0-wrapper"]].join(" ")},
  page: { className: [style['home-page'], style["content0"]].join(" ")},
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: style['title-wrapper'],
    children: [{ name: 'title', children: '产品与服务' }],
  },
  block: {
    className: style['block-wrapper'],
    children: [
      {
        name: 'block0',
        className: style['block'],
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: style['icon'],
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { className: style['content0-title'], children: '一站式服务' },
          content: { children: '随时随地，川内一个电话送货上门' },
        },
      },
      {
        name: 'block1',
        className: style['block'],
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: [style['icon'], style['jtafi4x81c-editor_css']].join(" "),
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: {
            className: style['content0-title'],
            children: '全网最优惠价格',
          },
          content: { children: '打造川内最优惠价格' },
        },
      },
      {
        name: 'block2',
        className: style['block'],
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: style['icon'],
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { className: style['content0-title'], children: '一站式数据运营' },
          content: { children: '沉淀产品接入效率和运营小二工作效率数据' },
        },
      },
    ],
  },
};
