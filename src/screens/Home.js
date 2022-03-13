import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { blogPost } from '../actions/blogPostActions';
import Loader from '../components/Loader';

function Home() {

    const dispatch = useDispatch()
    const blogPostList = useSelector(state => state.blogPost)
    const { loading, error, blogPostData } = blogPostList

    useEffect(() => {
        dispatch(blogPost())
    }, [dispatch])

    return (
        <div className={styles.Container}>
            {/* {data.map(blogData => (
                <Card key={blogData.id} style={{ width: '18rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Card.Title>{blogData.title}</Card.Title>
                            <img src='./star.png' onClick={() => console.log('HEre')} style={{ height: 25, width: 25 }} alt="Logo" />
                        </div>
                        <Card.Text>
                            {blogData.body}
                        </Card.Text>
                        <Button variant="primary">See details...</Button>
                    </Card.Body>
                </Card>
            ))} */}
            {loading ? <Loader /> :
                blogPostData.map(blogData => (
                    <Card key={blogData.id} style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Card.Title>{blogData.title}</Card.Title>
                                <img src='./star.png' onClick={() => console.log('HEre')} style={{ height: 25, width: 25 }} alt="Logo" />
                            </div>
                            <Card.Text>
                                {blogData.body}
                            </Card.Text>
                            <Button variant="primary">See details...</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Home