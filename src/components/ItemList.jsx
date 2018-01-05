import React from 'react';
import TextInput from './TextInput.jsx';
import Item from './Item.jsx';
import { dispatch } from 'redux';
import * as ItemsAction from '../redux/Items.jsx'
import { connect } from 'react-redux'

class ItemList extends React.Component {
    constructor (props) {
        super(props);

        // this.state = {
        //     items: [{purchased: true, name: 'JASON', price: 'too expensive'}, {purchased: false, name: 'Mark', price: 'too expensive'}, {purchased: false, name: 'Erich', price: 'too expensive'}]
        // }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event, itemName) {
        // let newitems = this.state.items;
        // newitems[itemNumber].purchased = event.target.checked;
        this.props.dispatch(ItemsAction.checkItem(itemName));
    }

    onSubmit(data){
        this.props.dispatch(ItemsAction.addItem(data.name, data.price))
    };


    render() {
        console.log(this)
        return (
            <div>
                <TextInput onSubmit={this.onSubmit} />
                <ul>
                    {this.props.items.map(({ purchased, name, price }, i) => {
                        return (
                            <Item purchasedOnChange={this.onChange} purchased={purchased} name={name} price={price} key={i} index={i}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        items: state
    }
}

export default connect(mapStateToProps)(ItemList);
