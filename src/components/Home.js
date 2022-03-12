import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Button, Card } from 'react-bootstrap';

function Home() {

    const [data, setData] = useState([]);

    async function fetchFunction() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const blogPost = await response.json();
            setData(blogPost)
            console.log(blogPost)
        }
        catch (err) {
            throw err;
            console.log(err);
        }
    }

    useEffect(() => {
        fetchFunction()
    }, []);

    return (
        <div className={styles.Container}>
            {data.map(blogData => (
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
            ))}
        </div>
    )
}

export default Home