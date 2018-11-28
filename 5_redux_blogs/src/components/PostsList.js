import React, { Component } from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";
// import { getPosts } from "../actions/index";
import { getPostsAndUsers } from "../actions/index";

class PostsList extends Component {
  render() {
    return <div className="ui relaxed divided list"> {this.renderList()} </div>;
  }

  renderList() {
    const listOfPosts = this.props.posts.map(post => {
    
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2> {post.title} </h2>
              <p>{post.body}</p>
            </div>
            <hr style={{ width: "20%" }} />
            <UserHeader userID={post.userId} users={this.props.users}/>
          </div>
        </div>
      );
    });
    return listOfPosts;
  }
  componentDidMount() {
    // this.props.getPosts();
    this.props.getPostsAndUsers();
  }
}

const mapStateToProps = state => ({ posts: state.posts, users: state.users });

// const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps, // first arg -> maps redux state to this comp's props
  { getPostsAndUsers } //second arg-> adds action creator fns to this comp's props
  // { getPostsAndUsers } //second arg-> adds action creator fns to this comp's props
)(PostsList);
