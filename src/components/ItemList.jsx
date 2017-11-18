import React from 'react';
import TextInput from './TextInput.jsx';
import Item from './Item.jsx';

class ItemList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            items: [{purchased: true, name: 'JASON', price: 'too expensive'}, {purchased: false, name: 'Mark', price: 'too expensive'}, {purchased: false, name: 'Erich', price: 'too expensive'}]
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event, itemNumber) {
        let newitems = this.state.items;
        newitems[itemNumber].purchased = event.target.checked;
        this.setState({items: newitems});
    };
    onSubmit(data){
        let items = this.state.items;
        items.push({purchased: false, name: data.name, price: data.price})

        this.setState({items}, () => console.log(this.state.items));

    };

    render() {
        return (
            <div>
                <TextInput onSubmit={this.onSubmit} />
                <ul>
                    {this.state.items.map(({ purchased, name, price }, i) => {
                        return (
                            <Item purchasedOnChange={this.onChange} purchased={purchased} name={name} price={price} key={i} index={i}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ItemList;
