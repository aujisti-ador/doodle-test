import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFavouritePost, blogPost } from '../actions/blogPostActions';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function Home() {

    const dispatch = useDispatch()
    const blogPostList = useSelector(state => state.blogPost)
    const { loading, error, blogPostData } = blogPostList

    const setInLocalStorage = (data) => {
        var a = [];
        a = JSON.parse(localStorage.getItem('session')) || [];
        const index = a.map(object => object.id).indexOf(data.id);
        if (index < 0) {
            a.push(data);
        } else {
            a.splice(index, 1)
        }
        localStorage.setItem('session', JSON.stringify(a));

    }


    const handleFavourite = (data) => {
        // console.log('from click==>', data)
        setInLocalStorage(data)
        alert('Favoutite list updated')
    }

    useEffect(() => {
        dispatch(blogPost())
    }, [dispatch])

    return (
        <div className={styles.Container}>
            {loading ? <Loader /> :
                blogPostData.map(blogData => (
                    <Card key={blogData.id} style={{ width: '18rem', marginBottom: '1rem' }}>
                        <Card.Body>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <Card.Title>{blogData.title}</Card.Title>
                                <img src={require('../assets/star.png')}
                                    onClick={() => handleFavourite(blogData)}
                                    style={{ height: 25, width: 25 }}
                                    alt="Logo" />
                            </div>
                            <Card.Text>
                                {blogData.body}
                            </Card.Text>
                            <Link to={`/details/${blogData.id}`}>
                                <Button variant="primary">See details...</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Home