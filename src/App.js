import React from 'react';
import SearchForm from './components/SearchForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {

        const appStyle = {
            width: 1000,
            padding: 50
        };

        return (
            <div style={appStyle}>
                <SearchForm></SearchForm>
            </div>
        );
    }
};

App.protoTypes = {
    // TODO: this checking isnt working 
    // URL: React.protoTypes.object
};

App.defaultProps = {
    URL: {
        baseUrl: "https://itunes.apple.com/",
        search: "search?term=",
        defaultsearch: "eminem",
        limit: "&limit=5"
    }
};

export default App;