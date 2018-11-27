import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser } from "../actions/index";

class UserHeader extends Component {
  render() {
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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { getUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
