import React, { Component } from 'react';
import { connect } from 'react-redux';
import KoalaTableItem from '../KoalaTableItem/KoalaTableItem';

class KoalaTable extends Component {

    //this will GET all koalas on component did mount

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Notes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.setKoalas.length > 0 &&
                            this.props.reduxStore.setKoalas.map((koala, i) => {
                            return <KoalaTableItem key={i} koala={koala} />
                        })}
                    </tbody>
                </table>
            </div>
            
        )
    }
}

//connect to redux store

const mapReduxStoreToProps = reduxStore => { return {reduxStore} };

export default connect(mapReduxStoreToProps)(KoalaTable);