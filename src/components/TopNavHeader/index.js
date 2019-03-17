import React, { PureComponent } from 'react';
import Link from 'umi/link';
import RightContent from '../GlobalHeader/RightContent';
import BaseMenu from '../SiderMenu/BaseMenu';
import { getFlatMenuKeys } from '../SiderMenu/SiderMenuUtils';
import styles from './index.less';
import { title } from '../../defaultSettings';
import { enquireScreen } from 'enquire-js';
import {Row, Col, Popover, Icon} from "antd";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const { location } = window;
export default class TopNavHeader extends PureComponent {
  state = {
    maxWidth: undefined,
    isMobile: !location.port,
    menuVisible: false
  };

  static getDerivedStateFromProps(props) {
    return {
      maxWidth: (props.contentWidth === 'Fixed' ? 1200 : window.innerWidth) - 280 - 165 - 40,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: false,
    });
  };

  handleShowMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  };

  render() {
    const { isMobile } = this.state;
    const { theme, contentWidth, menuData, logo } = this.props;
    const { maxWidth } = this.state;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    let p = {...this.props};
    p.onClickTigger = this.onMenuVisibleChange;
    const {menuVisible} = this.state;
    return (
      <div>
        <Row className={`${styles.head} ${theme === 'light' ? styles.light : ''}`}>
          {!isMobile ? (
            <div>
              <Col xs={16} sm={12} md={10} lg={12} xl={14}>
                <div className={styles.logo} key="logo" id="logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                    <h1>{title}</h1>
                  </Link>
                </div>
              </Col>
              <Col xs={16} sm={12} md={14} lg={12} xl={10}>
                <BaseMenu {...this.props} flatMenuKeys={flatMenuKeys} className={styles.menu} />
              </Col>
            </div>
            ):(
              <div style={{textAlign: "center"}}>
                  <div className={styles.logo} key="logo" id="logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                      <h1>{title}</h1>
                    </Link>
                    <span style={{marginRight: "30px", float: "right"}}>
                      <Popover
                        overlayClassName={styles["popover-menu"]}
                        placement="bottomRight"
                        content={<BaseMenu {...p} flatMenuKeys={flatMenuKeys} className={styles.menu} onClick={this.onMenuVisibleChange} />}
                        trigger="click"
                        visible={menuVisible}
                        arrowPointAtCenter
                        style={{padding: "0"}}
                      >
                        <Icon type="menu" onClick={this.handleShowMenu} />
                      </Popover>
                    </span>
                  </div>
                <Col>

                </Col>
              </div>
            )}
        </Row>
      </div>
    );
  }
}
