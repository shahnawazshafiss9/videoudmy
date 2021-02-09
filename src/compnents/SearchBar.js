import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {term: ''};
    
    searchIput = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        

    } 
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Vedio Search</label>
                        <input type="text"
                         value={this.state.term}
                         onChange={this.searchIput}
                          />
                    </div>
                </form>
            </div>
        )
    }
}
