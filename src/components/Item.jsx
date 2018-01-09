import React from 'react';
import { dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ItemsAction from '../redux/Items.jsx'


class Item extends React.Component {
    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);

    }

    onChange(event, itemName) {
        // let newitems = this.state.items;
        // newitems[itemNumber].purchased = event.target.checked;
        this.props.checkItem(itemName);
    }

    render() {
        console.log(this.props)

        let myitem = this.props.items[this.props.index]
        
        return (
            <div>
                <li>
                    <input type='checkbox' checked={myitem.purchased} onChange={this.onChange}/>
                    <label>{myitem.name}</label>
                    <label>${myitem.price}</label>
                </li>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkItem: (itemName) => {
            dispatch(ItemsAction.checkItem(itemName))
        }
    }
    //return bindActionCreators(ItemsAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);