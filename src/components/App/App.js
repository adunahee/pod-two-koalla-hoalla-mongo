import React, { Component } from 'react';
import KoalaTable from '../KoalaTable/KoalaTable';
import KoalaForm from '../KoalaForm/KoalaForm';
import {connect} from 'react-redux';


class App extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'GET_KOALAS'})
  }
  
  render() {
    return (
      <div>
        <h1>Koala Holla!</h1>
        <KoalaForm/>
        <KoalaTable/>
      </div>
    );
  }
  
}



export default connect()(App);