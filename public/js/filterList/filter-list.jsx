import React from 'react';

var FilterList = React.createClass({

	initialItems: [
                "Apples",
                "Pineapple",
                "oranges",
                "Strawberry",
                "Cranberry",
                "Grapes",
                "Watermelon",
                "MuskMelon"
            ],

    getInitialState: function() {
        return {
            items: []
        }
    },

    componentWillMount: function(){
        this.setState({items: this.initialItems})
    },

    filterList: function(event) {
        var updatedList = this.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },

    render: function() {
        return(
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/>
            </div>
        )
    }
});


var List = React.createClass({
    render: function(){
        return (
            <ul>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

module.exports = FilterList;