import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserHeader extends Component {

  render() {
    return (
      <div>
          userID is: {this.props.userId}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)
