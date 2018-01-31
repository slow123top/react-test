import React, {Component} from 'react'
import {Row, Col, Table} from 'antd'

class IndexTable extends Component {
    constructor() {
        super();
        this.state = {
            table: 'table'
        }
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }];

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
                        <Table columns={columns} dataSource={data}></Table>
                    }/>
                </Row>
            </div>
        )
    }
}

export default IndexTable;