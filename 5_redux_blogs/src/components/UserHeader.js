import React, { Component } from "react";
import { connect } from "react-redux";

// import { getPostsAndUsers } from "../actions/index";

class UserHeader extends Component {
  render() {
    if (!this.props.userID) return null;

    //else
    // let user = this.props.users.find(user => {
    //   return user.id === this.props.userID;
    // });
    return (
      <div>
        <p>userID is: {this.props.userID}</p>
       
      </div>
    );
  }

  componentDidMount() {
    //call action getUser
    // this.props.getPostsAndUsers(this.props.userID);
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state.users);
  const user = state.users.find(
    user => user.id === ownProps.userID //ownProps is the props of the component before state is mapped
  );

  return { user };
};

// const mapActionsToProps = { getPostsAndUsers };

export default connect(
  mapStateToProps
  // {getUser: getUser}
  // mapActionsToProps
)(UserHeader);
