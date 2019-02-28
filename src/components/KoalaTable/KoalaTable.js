import React, { Component } from 'react';

import KoalaTableItem from '../KoalaTableItem/KoalaTableItem';

class KoalaTable extends Component {

    //this will GET all koalas on component did mount

    render() {
        return(
            <div>
                <KoalaTableItem />
            </div>
            
        )
    }
}

//connect to redux store

export default KoalaTable;