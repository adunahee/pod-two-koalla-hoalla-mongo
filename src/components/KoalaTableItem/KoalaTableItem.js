import React, { Component } from 'react';

class KoalaTableItem extends Component {

    buildKoalaRow = () => {
        const koalaKeys = Object.keys(this.props.koala);
        const koalaValues = Object.values(this.props.koala);
        return koalaKeys.map((curr, i) => {
            if (curr === '_id' || curr === '__v' || curr === 'ready_to_transfer') {
                return null
            } else {
                return <td key={i}> {koalaValues[i]} </td>
            }

        })
    }

    handleUpdateClick = () => {
        this.props.dispatch({ type: 'MARK_TRANSFER', payload: this.props.koala._id })
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                {this.buildKoalaRow()}
                <td>{this.props.koala.ready_to_transfer ?
                    'Ready!' :
                    <button onClick={this.handleUpdateClick}>Transfer</button>
                } </td>
            </tr>

        )
    }
}

export default KoalaTableItem;