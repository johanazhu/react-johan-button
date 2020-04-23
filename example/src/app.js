import React from "react";
import { render } from "react-dom";

// import Button from "../../src";
// import "../../scss/index.scss";

// import Button from '../../lib';
import "../../lib/react-johan-btn.min.css";

import Button from 'react-johan-button';

console.log('Button', Button)

function App() {
    return (
        <div>
            <Button>我是普通button</Button>
            <Button size="sm">我是小尺寸button</Button>
            <Button size="lg">我是大尺寸button</Button>
            <Button type="danger">我是危险类型button</Button>
            <Button disabled={true}>不能点击的button</Button>
            <Button onClick={() => {
                alert('送我上天')
            }}>Button的回调事件</Button>
        </div>
    );
}

render(<App />, document.getElementById("app"));
