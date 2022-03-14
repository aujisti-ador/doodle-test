import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogPostByIdAction, blogPostDetailsAction } from '../actions/blogPostActions';
import Loader from '../components/Loader';
import styles from './Details.module.css'

function Details() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const blogPostDetailsList = useSelector(state => state.blogPostDetails)
    const idData = useSelector(state => state.blogPostById)
    // const { loading: idLoader, error: e, blogPostId } = idData
    const { loading, error, blogPostDetailsData } = blogPostDetailsList

    useEffect(() => {
        console.log(idData)
        // console.log(blogPostDetailsData)
    })

    useEffect(() => {
        dispatch(blogPostDetailsAction(id))
        dispatch(blogPostByIdAction(id))
        // console.log(blogPostId)
        // console.log(blogPostDetailsData)
    }, [dispatch, id])

    return (
        <div className={styles.Container}>
            <div className={styles.Post}>
                <div style={{
                    flexDirection: 'row'
                }}>
                    <img src={require('../assets/account.png')} style={{
                        heigt: 30,
                        width: 30
                    }} />
                    {/* <h4>{idData.blogPostId.title || 'loading...'}</h4> */}
                </div>
                {/* <h6>{idData.blogPostId.body || 'loading...'}</h6> */}
                {
                    loading ? <Loader /> :
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
}

export default Details