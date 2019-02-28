import React, { Component } from 'react';

class KoalaTableItem extends Component {
    render() {
        console.log(this.props);
        return(
            <tr>
                <td>table item</td>

            </tr>
        )
    }
}

export default KoalaTableItem;