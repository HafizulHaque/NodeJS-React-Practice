import React, {Component} from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component{

    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            comment: '',
            isFriendly: true,
            gender: "male",
            favColor: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        console.log(`${name} ${value} ${type} ${checked}`)
        if(type==='submit'){
            console.log('form submit action taken')
        }else if(type==='checkbox'){
            this.setState({
                [name]: checked
            })
        }else{
            this.setState({
                [name]: value
            })
        }
    }


    render(){
        return(
            <FormComponent
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }
}

export default FormContainer