import React, { Component } from 'react';
//PureRenderMixin 优化
import PurrRenderMixin from 'react-addons-pure-render-mixin'
class Input extends Component {
    constructor(props,context) {
        super(props,context);
        //优化
        this.shouldComponentUpdate = PurrRenderMixin.shouldComponentUpdate.bind(this)
        this.changeHandler = this.changeHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this)
    }
    
    state = {
        value:''
    }
    changeHandler(e){
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandler(e){
        const value = this.state.value;
        if(e.keyCode === 13&& value.trim()){
            this.props.submitFn(value);
            this.setState({
                value:''
            })
            

        } 
    }

    render() { 
        let inputStyle = {
            width:'200px',
            height:'20px',
            fontSize:'12px',
            border:'1px solid #e1e1e1'
        }
        return ( 
            <div>
                <input type="text" style={inputStyle} value={this.state.value} onChange={this.changeHandler} onKeyUp = {this.keyUpHandler}/>
            </div>
         )
    }
}
 
export default Input;