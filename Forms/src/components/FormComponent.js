import React from 'react'

function FormComponent(props){
    return(
        <form onSubmit={props.handleChange}>
            <input 
                type="text" 
                value={props.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={props.handleChange}
            /><br/><br/>
            <input 
                type="text" 
                value={props.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={props.handleChange}
            /><br/><br/>
            <textarea
                name="comment"
                value={props.comment}
                placeholder="Comment Here.."
                onChange={props.handleChange}
            /><br/><br/>
            <label>
                <input
                    type="checkbox"
                    checked={props.isFriendly}
                    name="isFriendly"
                    onChange={props.handleChange}
                />isFriendly
            </label><br/><br/>
            <label>
                <input
                    type="radio"
                    checked={props.gender==='male'}
                    name="gender"
                    value="male"
                    onChange={props.handleChange}
                />Male
            </label><br/>
            <label>
                <input
                    type="radio"
                    checked={props.gender==='female'}
                    name="gender"
                    value="female"
                    onChange={props.handleChange}
                />Female
            </label><br/><br/>
            <label>Favourite Color: 
                <select 
                    name='favColor'
                    value={props.favColor}
                    onChange={props.handleChange}
                >
                    <option value="">---Choose your favourite color---</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
            </label><br/><br/>
            <button>Submit</button>
            <h2>{`Your Name: ${props.firstName}  ${props.lastName}`}</h2>
            <h3>{`You commented: ${props.comment}`}</h3>
            <h3>{`You are a : ${props.isFriendly? "friendly":"non-friendly"}  ${props.gender}`}</h3>
            <h3>{`Your favourite color is: ${props.favColor}`}</h3>
        </form>
    )
}

export default FormComponent