import React, { Component } from 'react';
class App extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                {/* 模板文件，公共的头部可以写在这里 */}
                <header style={{backgroundColor:'red', height:'20px'}}>
                    
                </header>
                <div>{this.props.children}</div>
                <footer style={{backgroundColor:'grey', height:'20px'}}>

                </footer>
            </div>
         )
    }
}
 
export default App;