import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getUser } from "../actions/index";

class UserHeader extends Component {
  render() {
    if (!this.props.user) return null;
    //else
    console.log(this.props.user);
    return (
      <div>
        <p>userID is: {this.props.userID}</p>
        <p>
          username is:
          <a href={`mailto:${this.props.user.email}`}>
             {this.props.user.username}
          </a>
        </p>
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
    user => user.id === ownProps.userID //ownProps is the props of the component before state is mapped
  );

  return { user };
};

const mapActionsToProps = { getUser };

export default connect(
  mapStateToProps,
  // {getUser: getUser}
  mapActionsToProps
)(UserHeader);
