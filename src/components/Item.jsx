import React from 'react';

class Item extends React.Component {
    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
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
