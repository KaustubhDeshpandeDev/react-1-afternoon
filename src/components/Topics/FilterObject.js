import React, { Component } from 'react';

class FilterObjects extends Component{

    constructor(){
        super();
        this.state = {
            cars: [
                {
                    type:'720s',
                    brand: 'mclaren',
                    year: 2018
                },
                {
                    type: '918',
                    brand: 'porsche',
                    year: 2014
                },
                {
                    type: 'R8',
                    brand: 'audi',
                    year: 2017
                }
            ],
            userInput: '',
            filteredCars: [],
        }
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    filterCars(prop){
        var cars = this.state.cars;
        var filteredCars = [];
        for (var i=0; i<cars.length;i++){
            if(cars[i].hasOwnProperty(prop)){
                this.filteredCars.push(cars[i]);
            }
        }
    }
    render(){
        return(
            <div className="puzzleBoxfilterObjectsPB">
                <h4> FilterObjects </h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.cars,null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterCars(this.state.userInput)}></button>
                <span className="resultsBox">Filtered: {JSON.stringify(this.state.filteredCars,null, 10)} </span>
            </div>
        )
    }
}
export default FilterObjects;