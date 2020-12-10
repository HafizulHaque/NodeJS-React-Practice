import React from 'react'

class Item extends React.Component{

    render(){
        return(
            <div className="item">
                <input 
                    id="name" 
                    type="checkbox" 
                    checked={this.props.attr.available}
                    onChange={(onClick)=>this.props.handleEvent(this.props.attr.id)}
                />
                <label 
                    style={{
                        color: this.props.attr.available && '#aaa',
                        textDecoration: this.props.attr.available && 'line-through'
                    }}
                    htmlFor="name">{this.props.attr.name}
                </label>
                <br/>
                <hr width="100%"></hr>
            </div>
        )
        
    }
}

export default Item