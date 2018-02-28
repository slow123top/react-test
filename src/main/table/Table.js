import React, {Component} from 'react'
import {Row, Col, Table} from 'antd'
import {axiosInstance} from '../../utils/http'

class IndexTable extends Component {
    constructor() {
        super();
        this.state = {
            table: 'table',
            data: []
        }
        this.getSummary = this.getSummary.bind(this);
    }

    getSummary() {
        axiosInstance.get('/summary').then(res => {
            console.log(res);
            let data = [];
            res.data.data.forEach(item => {
                item.data.forEach(item => {
                    data.push(item)
                })
            });
            data.forEach((item, index) => {
                item.key = `${index}`
            });
            console.log(data)
            this.setState({
                data: data
            })

        })
    }

    componentDidMount() {
        this.getSummary();
    }

    render() {
        const columns = [{
            title: '索引',
            dataIndex: 'key',
            key: 'index'
        },
            {
                title: '主类',
                dataIndex: 'mainType',
                key: 'mainType'
            }, {
                title: '次类',
                dataIndex: 'subType',
                key: 'subType',
            }, {
                title: '站点',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span><a href="#">文件详情</a></span>
                ),
            }
        ];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        return (
            <div className={this.state.table}>
                <Row type='flex' justify='center'>
                    <Col span={24} children={
                        <Table columns={columns} dataSource={this.state.data}></Table>
                    }/>
                </Row>
            </div>
        )
    }
}

export default IndexTable;