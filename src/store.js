import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    blogPostReducer,
    blogPostDetailsReducer,
    getFavouritePostReducer,
    addFavouritePostReducer,
    blogPostByIdReducer
} from './reducers/blogPostReducers.js'
import initialState from './initialState'

const reducer = combineReducers({
    blogPost: blogPostReducer,
    blogPostById: blogPostByIdReducer,
    blogPostDetails: blogPostDetailsReducer,
    favouritePost: getFavouritePostReducer,
    addFavouritePost: addFavouritePostReducer
})

const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store