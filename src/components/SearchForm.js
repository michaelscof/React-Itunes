import React from 'react';
import SearchList from './SearchList';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: "",
            results: []
        }
        this.search = this.search.bind(this);
    }
    itunesAPI() {
        fetch("https://itunes.apple.com/search?term="+this.state.searchText+"&limit=5")
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        results: response.results
                    });
                },
            )
    }
    render() {
        const searchFormStyle = {
            padding:20
        };
        const buttonStyle={
            marginTop:10,
            width:200
        }
        return (
            <div className="form-group" style={searchFormStyle}>
                <div>
                <h2>Music Player</h2>
                </div>
                <input className="form-control" name="searchText" value={this.state.searchText} onChange={this.search}></input>
                <button className="btn btn-info form-control" style={buttonStyle} onClick={(event) => {
                    this.itunesAPI();
                }}>Search</button>
                <SearchList results={this.state.results}></SearchList>
            </div>
        );
    }
    search(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
}

export default SearchForm;