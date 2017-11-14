import React from 'react';

class Item extends React.Component {
    constructor (props) {
        super(props);

//         this.state = {
//             purchased: props.purchased ? props.purchased : false,
//             name: props.name ? props.name : '',
//             price: props.price ? props.price : 0,
//             purchasedOnChange: props.purchasedOnChange,
//             index: props.index
//         };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        //this.setState({...this.state, purchased: !props.purchased})
        this.props.purchasedOnChange(event, this.props.index);
    }

    render() {
        
        return (
            <div>
                <li>
                    <input type='checkbox' checked={this.props.purchased} onChange={this.onChange}/>
                    <label>{this.props.name}</label>
                    <label>${this.props.price}</label>
                </li>
            </div>
        )
    }
}

export default Item;
