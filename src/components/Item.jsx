import React from 'react';

class Item extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            purchased: props.purchased ? props.purchased : false,
            name: props.name ? props.name : '',
            price: props.price ? props.price : 0,
        }

        this.onChange = this.onChange.bind(this);

    }

    onChange(event) {
        //this.setState({...this.state, purchased: !props.purchased})
        this.setState({purchased: event.target.checked})
        
    }

    render() {
        
        return (
            <div>
                <li>
                    <input type='checkbox' checked={this.state.purchased} onChange={this.onChange}/>
                    <label>{this.state.name}</label>
                    <label>${this.state.price}</label>
                </li>
            </div>
        )
    }
}

export default Item;