import axios from 'axios'
import {
    BLOG_POST_REQUEST,
    BLOG_POST_SUCCESS,
    BLOG_POST_FAIL,
    BLOG_POST_DETAILS_REQUEST,
    BLOG_POST_DETAILS_SUCCESS,
    BLOG_POST_DETAILS_FAIL,
    ADD_BLOG_FAVOURITE,
    GET_BLOG_FAVOURITE,
    BLOG_POST_REQUEST_ID,
    BLOG_POST_SUCCESS_ID,
    BLOG_POST_FAIL_ID
} from '../constants/blogActionCreaters'

export const blogPost = () => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_POST_REQUEST
        })

        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

        dispatch({
            type: BLOG_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_POST_FAIL,
            payload: error.message
        })
    }

}
export const blogPostByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_POST_REQUEST_ID
        })

        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // console.log('from action', data)
        dispatch({
            type: BLOG_POST_SUCCESS_ID,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BLOG_POST_FAIL_ID,
            payload: error.message
        })
    }

}

export const blogPostDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_POST_DETAILS_REQUEST
        })

        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        dispatch({
            type: BLOG_POST_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: BLOG_POST_DETAILS_FAIL,
            payload: error.message
        })
    }
}
