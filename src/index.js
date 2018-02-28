import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//localhost:8080/list  没有# 需要服务器端支持
// import { browserHistory} from 'react-router';
//localhost:8080/#/list
import { hashHistory } from 'react-router'

import RouterMap from './router'



//性能检测
import Perf from 'react-addons-perf';
// 定义全局变量
if(__DEV__){
    window.Perf = Perf
}
// Render the main component into the dom
ReactDOM.render(
<RouterMap history={hashHistory}/>,
document.getElementById('app')
);
