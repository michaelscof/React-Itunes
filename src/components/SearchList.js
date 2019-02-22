import React from 'react';

class SearchList extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        var tableStyle = {
            padding:20
        };
        return (
            <div>
                <table style={tableStyle}>
                    {this.props.results.map((song,index) => <tr> <td> {song.trackName} </td></tr>)}
                </table>
            </div>
        );
    }
}

export default SearchList;