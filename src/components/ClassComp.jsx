import React from "react";

class ReactCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      friendName: "",
    };
    console.log("==================");
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props", props);
    console.log("getDerivedStateFromProps called");
    return {
      fullname: props.name,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // tells you when you don't need to rerender a react component
    console.log("shouldComponentUpdate called");
    return true;
  }

  componentDidMount() {
    //Data fetch, ui manipulation
    setTimeout(() => {
      this.setState({ friendName: "Manish Man" });
    }, 1000);
    console.log("componentDidMount called");
    console.log("==================");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
    console.log("==================");
  }

  componentWillUnmount() {
    console.log("  componentWillUnmount called");
    console.log("==================");
  }

  render() {
    console.log("render called");
    return (
      <React.Fragment>
        <div>{this.state.fullname}</div>
        <div>{this.state.friendName}</div>
      </React.Fragment>
    );
  }
}

export default ReactCycle;
