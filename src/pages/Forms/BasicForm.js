import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {formatMessage, FormattedMessage} from 'umi/locale';
import {
  Row,
  Col,
  Card,
  Pagination,
  Button
} from 'antd';

const {Meta} = Card;

@connect(({stone}) => {
  const {stonePage} = stone;
  return {stonePage};
})
class BasicForms extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "stone/getStoneDataSource",
      payload: {typeId: 5, pageNum: 1, pageSize: 10}
    });
  }

  render() {
    const style={
      marginBottom: '40px'
    };
    const {stonePage} = this.props;
    console.log(stonePage);
    return (
      <div style={{marginButton: "40px"}}>
        <div style={{left: "50px", maxWidth: "1200px", margin: "auto"}}>
          <Row style={{top: "50px"}}>
            {stonePage.map((item)=>{
                return (
                <Col xs={24} sm={12} md={8} lg={8} xl={6} style={style}>
                  <Card hoverable style={{width: 240, margin: 'auto'}} cover={<img alt="example" src={'/api/image/' + item.image} />}>
                    <Meta title={item.name} description="www.instagram.com" />
                  </Card>
                </Col>
                );
            })}
          </Row>
          <div style={{marginTop: "40px", paddingBottom: "60px"}}>
            <Pagination defaultCurrent={1} total={50} style={{float: "right"}} />
          </div>
        </div>
        <Button onClick={this.getStoneDataSource}>123</Button>
      </div>
    );
  }
}

export default BasicForms;
