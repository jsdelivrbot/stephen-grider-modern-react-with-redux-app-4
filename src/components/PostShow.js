import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSinglePost, deletePost } from '../actions'

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchSinglePost(id)
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { post } = this.props

    if (!post) {
      return (
        <div>
          Loading&hellip;
        </div>
      )
    }

    return (
      <div>
        <Link to="/">&larr; Back to All Posts</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostShow)