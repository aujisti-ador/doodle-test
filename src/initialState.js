const initialState = {
    blogPost: {
        loading: true,
        error: false,
        blogPostData: []
    },
    blogPostById: {
        loading: true,
        error: false,
        blogPostId: {}
    },
    blogPostDetails: {
        loading: true,
        error: false,
        blogPostDetailsData: {}
    },
    favouritePost: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }, {
        "userId": 1,
        "id": 2,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }]
}

export default initialState