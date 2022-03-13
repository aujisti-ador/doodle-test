import axios from 'axios'
import {
    BLOG_POST_REQUEST,
    BLOG_POST_SUCCESS,
    BLOG_POST_FAIL,
    BLOG_POST_DETAILS_REQUEST,
    BLOG_POST_DETAILS_SUCCESS,
    BLOG_POST_DETAILS_FAIL
} from '../constants/blogActionCreaters'

export const blogPost = () => async (dispatch) => {
    try {
        dispatch({
            type: BLOG_POST_REQUEST
        })

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

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

export const blogPostDetails = (id) => async (dispatch) => {
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