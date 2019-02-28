import React, { Component } from 'react';
import { connect } from 'react-redux';
class KoalaForm extends Component {
    //fill this out with required fields
    state = {
        name: '',
        gender: '',
        age: 0,
        ready_to_transfer: false,
        notes: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_KOALA',
            payload: this.state
        })
    }

    render() {
        return(
            <div>
                <h2>Form</h2>
                <form>
                    <input id='name' placeholder='name' onChange={this.handleChange}/>
                    <input id='gender' placeholder='gender' onChange={this.handleChange}/>
                    <input type='number' id='age' placeholder='age' onChange={this.handleChange}/>
                    {/* <input id='ready_to_transfer' placeholder='ready to transfer' onChange={this.handleChange}/> */}
                    <input id='notes' placeholder='notes' onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Add koala</button>
                </form>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(KoalaForm);