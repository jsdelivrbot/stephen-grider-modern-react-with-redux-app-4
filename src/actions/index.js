import axios from 'axios'

export const FETCH_POSTS = `FETCH_POSTS`
export const FETCH_SINGLE_POST = `FETCH_SINGLE_POST`
export const CREATE_POST = `CREATE_POST`
export const DELETE_POST = `DELETE_POST`

const rootUrl = `https://reduxblog.herokuapp.com/api`
const apiKey = `?key=david-luhr`

export const fetchPosts = () => {
  const request = axios.get(`${rootUrl}/posts${apiKey}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const fetchSinglePost = (id) => {
  const request = axios.get(`${rootUrl}/posts/${id}${apiKey}`)

  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}

export const createPost = (values, callback) => {
  const request = axios.post(`${rootUrl}/posts${apiKey}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}

export const deletePost = (id, callback) => {
  const request = axios.delete(`${rootUrl}/posts/${id}${apiKey}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}