import React from 'react';
import Item from './Item.jsx';

class ItemList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            items: [{purchased: true, name: 'JASON', price: 'too expensive'}, {purchased: false, name: 'Mark', price: 'too expensive'}, {purchased: false, name: 'Erich', price: 'too expensive'}]
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({purchased: event.target.checked})        
    }
    
    render() {
        return (
            <div>

                <ul>
                    {this.state.items.map(({ purchased, name, price }, i) => {
                        return (
                            <Item purchased={purchased} name={name} price={price} key={`uniq-${i}`} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ItemList;