import React, { Component } from 'react'

class AddFriend extends Component {
    constructor() {
        super();
        this.state = {
            id:0,
            inputName: "",
            inputAge: '',
            inputEmail: "",
        }
    }

    nameChange = event => {
        this.setState({ inputName: event.target.value })
    }

    
    ageChange = event => {
        this.setState({ inputAge: event.target.value })
    }

    emailChange = event => {
        this.setState ({ inputEmail: event.target.value })
    }


    formHandler = event => {
        event.preventDefault();
        this.props.handler({ 
            id:this.state.id,
            name:this.state.inputName, 
            age: this.state.inputAge,
            email: this.state.inputEmail
        })
        this.setState({ 
            inputName: "",
            inputAge: '',
            inputEmail: ""
         })
    }

    render(){
        return (
            <form>
                <h3>Add a new friend:</h3> <br/>
                <div className='formBox'>
                Name: <input 
                        type="text" 
                        placeholder="Name"
                        onChange = {this.nameChange}
                        value = {this.state.inputName}
                        ></input>

                        <br/>

                Age: <input 
                        type="text"
                        value = {this.state.inputAge}
                        onChange = {this.ageChange}
                        />

                        <br/>

                Email: <input 
                        type="text" 
                        placeholder="Email"
                        onChange = {this.emailChange}
                        value = {this.state.inputEmail}
                        /> 
                        <br/>
                </div>        

                <button onClick = {this.formHandler}>Submit</button>
            </form>
        )
    }
}

export default AddFriend;