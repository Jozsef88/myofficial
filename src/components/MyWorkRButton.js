import React, { Component } from "react";
import '../assets/css/templatemo-style.css';
// import { workData } from './components/WorkDataArray';

class MyWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "All"
        };
    }

    handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        }, () =>
        console.log(this.state.selectedOption));
        // const filteredWork = this.state.workData.filter(workData => {return workData.dataType})
      };

  render() {
    return (
        <form className="isotope-toolbar">
                  <label>
                    <input
                      type="radio"
                      data-type="*"
                      value="All"
                      checked={this.state.selectedOption === "All"}
                      onChange={this.handleOptionChange}
                      name="isotope-filter"
                    />
                    <span>all</span></label>
                    <label
                    ><input
                      type="radio"
                      data-type="people"
                      value="people"
                      checked={this.state.selectedOption === "people"}
                      onChange={this.handleOptionChange}
                      name="isotope-filter"
                    />
                    <span>people</span></label>
                    <label
                    ><input
                      type="radio"
                      data-type="nature"
                      value="nature"
                      checked={this.state.selectedOption === "nature"}
                      onChange={this.handleOptionChange}
                      name="isotope-filter"
                    />
                    <span>nature</span></label>
                    <label
                    ><input
                      type="radio"
                      data-type="animals"
                      value="animals"
                      checked={this.state.selectedOption === "animals"}
                      onChange={this.handleOptionChange}
                      name="isotope-filter"
                    />
                    <span>animals</span></label>
                    {/*
                    a <div className="isotope-box"> ide kerul at a home.js fajlbol
                    importaljuk be a myworklist.js fajlt, es a <WorkList workData={workData}/> ide kerul at a home.js fajlbol
                    */}
        </form>
    );
  }
}

export default MyWork;