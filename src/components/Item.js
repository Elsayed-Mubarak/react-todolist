import React, { Component } from 'react';
import "./items.css"


class Item extends Component {
    render() {
        let { items } = this.props;
//        console.log(".....", items);

        const itemsAftemLoop = items.map(itm => {

            return itm.count > 9 ?
                (
                    <div className='item' key={Math.random()}>
                        <div>{itm.id}</div>
                        <div>{itm.name}</div>
                        <div>{itm.count}</div>
                    </div>
                ) : null


        });

        return (
            <div>
                {itemsAftemLoop}
            </div>
        )
    }
}

export default Item;