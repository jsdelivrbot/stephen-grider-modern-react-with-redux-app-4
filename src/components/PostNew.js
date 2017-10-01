import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { createPost } from '../actions'

class PostNew extends Component {
  renderField = (field) => {
    const { meta: { touched, error }, name, label } = field
    const styleClassName = `form-group${touched && error ? ` has-danger` : ``}`

    return (
      <div className={styleClassName}>
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          id={name}
          name={name}
          type="text"
          {...field.input}
        />
        {touched ? 
          (
            <div className="text-help">
              {error}
            </div>
          )
          : ``
        }
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
        <Link
          className="btn btn-danger btn-cancel"
          to="/"
        >
          Cancel
        </Link>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = "Please enter a title."
  }
  if (!values.categories) {
    errors.categories = "Please enter some categories."
  }
  if (!values.content) {
    errors.content = "Please enter some content."
  }

  return errors
}

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(
  connect(null, { createPost })(PostNew)
)