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
import initialState from '../initialState'

export const blogPostReducer = (state = initialState.blogPost, action) => {

    switch (action.type) {
        case BLOG_POST_REQUEST:
            return {
                loading: true,
                ...state
            }
        case BLOG_POST_SUCCESS:
            return {
                loading: false,
                blogPostData: [...action.payload]
            }
        case BLOG_POST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}
export const blogPostByIdReducer = (state = initialState.blogPostById, action) => {

    switch (action.type) {
        case BLOG_POST_REQUEST_ID:
            return {
                loading: true
            }
        case BLOG_POST_SUCCESS_ID:
            return {
                loading: false,
                blogPostId: action.payload
            }
        case BLOG_POST_FAIL_ID:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const blogPostDetailsReducer = (state = initialState.blogPostDetails, action) => {
    switch (action.type) {
        case BLOG_POST_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case BLOG_POST_DETAILS_SUCCESS:
            return {
                loading: false,
                blogPostDetailsData: action.payload
            }
        case BLOG_POST_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}