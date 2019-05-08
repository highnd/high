import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 100 },
      { id: 2, value: 300 },
      { id: 3, value: 400 },
      { id: 4, value: 500 },
      { id: 5, value: 800 },
      { id: 6, value: 10000 },
      { id: 7, value: 15000 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>mahsol shomare @{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
