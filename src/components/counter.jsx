import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    drsd: 20 / 100
  };

  render() {
    return (
      <div>
        {this.props.children};
        <span className={this.rangadad()}>{this.state.count}</span>
        <button onClick={this.rangadad()} className="btn btn-secondary btn-md">
          mahsool{" "}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.hesabtakhfif()}
        >
          takhfif in kala
        </button>
        <button />
      </div>
    );
  }

  hesabtakhfif() {
    let darsad = this.state.drsd;
    var takhfif = this.props.count * darsad;
    return takhfif;
  }
  rangadad() {
    let classes = "badge m-2 badge-";
    classes += this.state.count ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
