import React, { useEffect, useState } from 'react'
import styles from './Favourite.module.css'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFavouritePost } from '../actions/blogPostActions';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function Favourite() {
    const [favPost, setFavPost] = useState(null);

    useEffect(() => {
        setFavPost(JSON.parse(localStorage.getItem('fav')))
    }, []);

    return (
        <div>
            <h1>Favourite Post</h1>
            <div className={styles.Container}>
                {favPost == null ? <h1>No post selected</h1> :
                    favPost.map(blogData => (
                        <Card key={blogData.id} style={{ width: '18rem', marginBottom: '1rem', marginRight: '10px' }}>
                            <Card.Body>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Card.Title>{blogData.title}</Card.Title>
                                    <img src={require('../assets/star.png')}
                                        onClick={() => console.log('HEre')}
                                        style={{ height: 25, width: 25 }} alt="Logo" />
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
        </div>
    )
}

export default Favourite