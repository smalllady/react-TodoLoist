import React, { Component } from 'react';
import { hashHistory } from 'react-router'
//PureRenderMixin 优化
import PurrRenderMixin from 'react-addons-pure-render-mixin'

import Input from '../../common/Input'
import List from '../../common/list'

class Todo  extends Component {
    constructor(props,context) {
        super(props,context);
        //优化
        this.shouldComponentUpdate = PurrRenderMixin.shouldComponentUpdate.bind(this)
        this.submitFn = this.submitFn.bind(this);
        
    }
    
    state = {
        todos:[]
    }
    submitFn(value){
        const id = this.state.todos.length;
        this.setState({
            todos:this.state.todos.concat({
                id:id,
                text:value
            })
        })
    }
    deleteFn(id){
        let data = this.state.todos;
        this.setState({
            todos:data.filter(item=>{
                if(item.id !==id){
                    return item
                }
            })
        })
    }
    clickHandle(value){
        hashHistory.push('/detail/'+value)
    }
    render() { 
        const arr = [1, 2, 3]
        return ( 
            <div>
                <h2>输入待办事项</h2>
                <Input submitFn = {this.submitFn}/>
                <List todos = {this.state.todos} deleteFn = {this.deleteFn.bind(this)}/>
                <hr/>
                <ul>
                    {
                        arr.map((item,index)=>{
                            return <li key={index} onClick={this.clickHandle.bind(this,item)}>请点击第{item}条新闻</li>
                        })
                    }
                </ul>
            </div>
         )
    }
}
 
export default Todo;