import React, { Component } from 'react';
import KoalaTable from '../KoalaTable/KoalaTable';
import KoalaForm from '../KoalaForm/KoalaForm';


class App extends Component {

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

export default App;