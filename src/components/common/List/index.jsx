import React, { Component } from 'react';
//PureRenderMixin 优化
import PurrRenderMixin from 'react-addons-pure-render-mixin'
class List extends Component {
    constructor(props) {
        super(props);
        //优化
        this.shouldComponentUpdate = PurrRenderMixin.shouldComponentUpdate.bind(this)
    }
    
    state = {}
    clickHandler(id){
        this.props.deleteFn(id)
    }
    render() {
        const data = this.props.todos;
        let ulStyle = {
            marginTop:'10px',
            fontSize:'16px',
            lineHeigth:'20px'
        } 
        return ( 
            <ul style = {ulStyle}>
                {
                    data.map((item,index)=>{
                        return <li key={index} onClick = {this.clickHandler.bind(this,item.id)}>{item.text}</li>
                    })
                }
            </ul>
         )
    }
}
 
export default List;