import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogPost, blogPostDetails } from '../actions/blogPostActions';
import Loader from '../components/Loader';
import styles from './Details.module.css'

function Details() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const blogPostDetailsList = useSelector(state => state.blogPostDetails)
    const blogPostList = useSelector(state => state.blogPost)
    const { loading, error, blogPostDetailsData } = blogPostDetailsList
    const { blogPostData } = blogPostList
    const [post, setPost] = useState([]);

    const filterPost = () => {
        const filterData = blogPostData.filter(x =>
            x.id == id
        )
        setPost(filterData[0])
    }

    useEffect(() => {
        dispatch(blogPostDetails(id))
        dispatch(blogPost()).then(() => filterPost())
    }, [dispatch, id])

    return (
        (loading ? <Loader /> :
            <div className={styles.Container}>
                <div className={styles.Post}>
                    <div style={{
                        flexDirection: 'row',
                    }}>
                        <img src={require('../assets/account.png')} style={{
                            heigt: 30,
                            width: 30
                        }} />
                        <h4>{post.title}</h4>
                    </div>
                    <h6>{post.body}</h6>
                    {
                        blogPostDetailsData.map((blogPostDetail) => (
                            <Card key={blogPostDetail.id}>
                                <Card.Body>
                                    <h6>{blogPostDetail.name}</h6>
                                    <p style={{ color: '#531e1e', fontStyle: 'italic' }}>{blogPostDetail.email}</p>
                                    <p style={{ backgroundColor: '#f2f4f2' }}>{blogPostDetail.body}</p>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        )
    )
}

export default Details