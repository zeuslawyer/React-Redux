import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser } from "../actions/index";

class UserHeader extends Component {
  render() {
    if(!this.props.user) return <div>UserHeader...</div>;
    //else
    return (
      <div>
        <p>userID is: {this.props.userID}</p>
        <p>Email: {this.props.user.email}</p>
      </div>
    );
  }

  componentDidMount() {
    //call action getUser
    this.props.getUser(this.props.userID);
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(
    user => user.id === ownProps.userID   //ownProps is the props of the component before state is mapped
  );
  return { user: user};
};

const mapActionsToProps = { getUser };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserHeader);
