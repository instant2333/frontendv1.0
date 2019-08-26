import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Menu,Dropdown,Button,Icon,Radio } from 'antd';
import './Drop.css';

const menu = (
    <Menu>
        <div>period</div>
        <Radio.Group  defaultValue="a">
            <Radio.Button value="a">hour</Radio.Button>
            <Radio.Button value="b">day</Radio.Button>
            <Radio.Button value="c">week</Radio.Button>
            <Radio.Button value="d">month</Radio.Button>
        </Radio.Group>
        <div>bubble content</div>
        <Radio.Group  defaultValue="a">
            <Radio.Button value="a">change</Radio.Button>
            <Radio.Button value="b">price</Radio.Button>
            <Radio.Button value="c">value rank</Radio.Button>
        </Radio.Group>
        <div>bubble size</div>
        <Radio.Group  defaultValue="a">
            <Radio.Button value="a">change</Radio.Button>
            <Radio.Button value="b">price</Radio.Button>
            <Radio.Button value="c">market cap</Radio.Button>
        </Radio.Group>
    </Menu>
);


class Titlemenu extends Component{

    render() {
        return(
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown.Button  overlay={menu}>
                    options
                </Dropdown.Button>
            </div>
        )
    }
}
export default Titlemenu;