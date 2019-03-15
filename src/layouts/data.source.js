import React from 'react';
import Style from './Footer.less';

export const Footer10DataSource = {
  wrapper: { className: Style[('home-page-wrapper', 'footer1-wrapper')] },
  OverPack: { className: Style.footer1, playScale: 0.2 },
  block: {
    className: Style['home-page'],
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: Style.block,
        title: {
          className: Style.logo,
          children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        content: {
          className: Style.slogan,
          children: 'Animation specification and components of Ant Design.',
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: Style.block,
        title: { children: '产品' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="#">花岗石</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">大理石</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">加工石材</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">更多</a>{' '}
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: Style.block,
        title: { children: '关于' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="#">FAQ</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">联系我们</a>{' '}
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: Style.block,
        title: { children: '新闻资讯' },
        content: {
          children: (
            <span>
              <p>
                {' '}
                <a href="#">XXXX</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">XXX</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">XXX</a>{' '}
              </p>{' '}
              <p>
                {' '}
                <a href="#">XXX</a>{' '}
              </p>
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: Style['copyright-wrapper'] },
  copyrightPage: { className: Style['home-page'] },
  copyright: {
    className: Style.copyright,
    children: (
      <span>
        ©2019 by <a href="https://motion.ant.design">XXX石材公司</a> All Rights Reserved
      </span>
    ),
  },
};
