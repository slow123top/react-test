import React, {Component} from 'react';
import {Menu, Icon} from 'antd'

class IndexMenu extends Component {
    constructor(props) {
        super(props);

        this.clickMenuItem = this.clickMenuItem.bind(this);
    }

    clickMenuItem(param) {
        let key = param.key;
        switch (key) {
            case '1':
                this.props.historyLocation.push('/index/table');
                break;
            case '2':
                this.props.historyLocation.push('/index/form');
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                onClick={this.clickMenuItem}
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart"/>
                    <span>表格</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop"/>
                    <span>表单</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox"/>
                    <span>Option 3</span>
                </Menu.Item>
                <Menu.SubMenu key="sub1"
                              title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub2"
                              title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        )
    }
}

export default IndexMenu;