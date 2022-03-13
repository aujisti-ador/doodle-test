import {
    BLOG_POST_REQUEST,
    BLOG_POST_SUCCESS,
    BLOG_POST_FAIL,
    BLOG_POST_DETAILS_REQUEST,
    BLOG_POST_DETAILS_SUCCESS,
    BLOG_POST_DETAILS_FAIL,
    ADD_BLOG_FAVOURITE,
    GET_BLOG_FAVOURITE
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

export const addFavouritePostReducer = (state = initialState, action) => {
    console.log('===>', action.payload)
    switch (action.type) {
        case ADD_BLOG_FAVOURITE:
            return {
                ...state,
                favouritePost: [...state.favouritePost, action.payload]
            }
        default:
            return state
    }
}

export const getFavouritePostReducer = (state = initialState.favouritePost, action) => {
    switch (action.type) {
        case GET_BLOG_FAVOURITE:
            return state
        default:
            return state
    }
}