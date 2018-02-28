import React,{ Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Home from '../components/pages/Home';
import Todo from '../components/pages/Todo';
import Detail from '../components/pages/Detail';
import NotFound from '../components/pages/NotFound';


class RouterMap extends Component {
    state = {}
    updateHandle(){
        console.log('每次router变化之后都会触发');
        //可以统计PV
    }
    render() { 
        return ( 
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='todo' component={Todo}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
         )
    }
}
 
export default RouterMap;