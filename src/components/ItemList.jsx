import React from 'react';
import TextInput from './TextInput.jsx';
import Item from './Item.jsx';
import { dispatch, bindActionCreators } from 'redux';
import * as ItemsAction from '../redux/Items.jsx'
import { connect } from 'react-redux'

class ItemList extends React.Component {
    constructor (props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(data){
        this.props.addItem(data.name, data.price)
    };

    render() {
        console.log(this)
        return (
            <div>
                <TextInput onSubmit={this.onSubmit} />
                <ul>
                    {this.props.items.map((item, i) => {
                        return (
                            <Item key={i} index={i}/>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ItemsAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
