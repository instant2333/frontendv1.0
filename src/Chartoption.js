import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Menu,Dropdown,Button,Icon,Radio } from 'antd';
import './Drop.css';

const indicators =(
    <Menu>
        <Menu.Item>
            macd
        </Menu.Item>
        <Menu.Item>
            kdj
        </Menu.Item>
        <Menu.Item>
            boll
        </Menu.Item>
    </Menu>
)
const options = (
    <Menu>
        <div>period</div>
        <Radio.Group  defaultValue="a">
            <Radio.Button value="a">hour</Radio.Button>
            <Radio.Button value="b">day</Radio.Button>
            <Radio.Button value="c">week</Radio.Button>
            <Radio.Button value="d">month</Radio.Button>
        </Radio.Group>
        <div>type</div>
        <Radio.Group  defaultValue="a">
            <Radio.Button value="a">Time share chart</Radio.Button>
            <Radio.Button value="b">Histogram</Radio.Button>
        </Radio.Group>
        <div>volume switch</div>
        <Radio.Group  defaultValue="a">
            <Radio.Button value="a">on</Radio.Button>
            <Radio.Button value="b">off</Radio.Button>
        </Radio.Group>
    </Menu>
);

class Chartoption extends Component{



    render() {
        return(
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown.Button  overlay={indicators}>
                    indicators
                </Dropdown.Button>
                <Dropdown.Button  overlay={options}>
                    options
                </Dropdown.Button>
            </div>
        )
    }
}




export default Chartoption;