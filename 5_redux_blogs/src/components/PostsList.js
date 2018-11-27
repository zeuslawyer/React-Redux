import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/index";

class PostsList extends Component {
  render() {
    if (this.props.posts === []) {
      return <div>Post List</div>;
    }

    const listOfPostTitles = this.props.posts.map(p => {
      return p.title;
    });

    return (
      <div>
        <ul>
          <li>{listOfPostTitles}</li>
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.getPosts();
  }
}

const mapStateToProps = state => ({ posts: state.posts });

// const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps, // first arg -> maps redux state to this comp's props
  { getPosts } //second arg-> adds action creator fns to this comp's props
)(PostsList);
