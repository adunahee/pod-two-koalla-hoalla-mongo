import React, { Component } from 'react';

class KoalaForm extends Component {
    //fill this out with required fields
    state = {
        name: '',
        gender: '',
        age: '',
        ready_to_transfer: '',
        notes: ''
    }

    //write POST request

    render() {
        return(
            <div>
                <h1>Form</h1>
            </div>
        )
    }
}

export default KoalaForm;