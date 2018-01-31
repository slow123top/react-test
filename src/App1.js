import React, {Component} from "react";
import {Button} from "antd"
class App1 extends Component {
    // constructor(props){
    //     super(props)
    //
    // }
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                {this.props.children}
                {this.props.left}
                asdsad
            </div>
        )
    }
}

export default App1;