import React from 'react';

class TextInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        };
        
        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    nameChange(event){
        this.setState({name: event.target.value});
    };
    priceChange(event){
        this.setState({price: event.target.value});
    };
    onSubmit(event){
        event.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(this.state)
        }
    };

    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' value={this.state.name} onChange={this.nameChange} /><br />
                <input type='text' value={this.state.price} onChange={this.priceChange} /><br/>
                <input type='submit' />
            </form>
        )
    }
}

export default TextInput;