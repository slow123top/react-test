import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Menu from './Menu'
import {Row, Col} from 'antd'
import Table from './table/Table'
import Form from './form/Form'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'flex',
            justify: 'center',
            location: props.location.pathname,
            childLocation: 'dsa'
        }
        this.clickMenuItem = this.clickMenuItem.bind(this);
    }

    componentDidMount() {
        console.log(this.props.location)
    }

    clickMenuItem(param) {
        console.log(param);
        let a = '1';
        switch (param.key) {
            case '1':
                this.props.history.push('/index/table');
                this.setState({childLocation: `a${a}`});
                break;
            default:
                break;
        }
        // console.log(this.state.childLocation);
    }


    render() {
        return (
            <div className='index'>
                <Row justify={this.state.justify} type={this.state.type}>
                    <Col span={3} children={
                        <Menu historyLocation={this.props.history}></Menu>
                    }/>
                    <Col span={21}>
                        {/*注册路由*/}
                        <Route path={`${this.state.location}/table`} component={Table}></Route>
                        <Route path={`${this.state.location}/form`} component={Form}></Route>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Index;