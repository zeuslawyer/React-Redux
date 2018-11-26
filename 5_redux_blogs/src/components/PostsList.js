import React, { Component } from "react";
import { connect } from "react-redux";
import { dummyAction } from "../actions/index";

class PostsList extends Component {
  render() {
    return <div>Post List</div>;
  }

  componentDidMount(){
    this.props.dummyAction();
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = { dummyAction };

export default connect(
  null, // first arg -> maps redux state to this comp's props
  {dummyAction}  //second arg-> adds actions to this comp's props
)(PostsList);
