import React, { Component } from 'react';
import { Link } from 'react-router'
class Home extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                <Link to="/todo">to todoList</Link>
            </div>
         )
    }
}
 
export default Home;