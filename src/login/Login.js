import React, {Component} from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import {Card, Form, Icon, Input, Button, Row, Col} from "antd"
import {axiosInstance} from '../utils/http'
import history from '../utils/history'

// const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axiosInstance.post('/login', {
                    username: values.userName,
                    password: values.password
                }).then(res => {
                    history.push('/index');
                })
                console.log('Received values of form: ', values);
                // console.log(this.props.history);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <Row type="flex" justify="center">
                    <Col span={4}>
                        <Card title="欢迎登陆">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('userName', {
                                        rules: [{required: true, message: 'Please input your username!'}],
                                    })(
                                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               placeholder="Username"/>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               type="password" placeholder="Password"/>
                                    )}
                                </Form.Item>
                                <Form.Item>

                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const LoginForm = Form.create()(Login);
export default LoginForm;