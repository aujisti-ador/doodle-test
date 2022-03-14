import React, { useEffect, useState } from 'react'
import styles from './Favourite.module.css'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFavouritePost } from '../actions/blogPostActions';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function Favourite() {
    const [favPost, setFavPost] = useState(null);
    const [reload, setReload] = useState(false)

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
        alert('Removed from favourite list')
        setReload(!reload)
    }

    useEffect(() => {
        setFavPost(JSON.parse(localStorage.getItem('session')))
    }, [reload]);

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
                                        onClick={() => handleFavourite(blogData)}
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