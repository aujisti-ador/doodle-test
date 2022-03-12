import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styles from './Details.module.css'

function Details() {

    const [comments, setComments] = useState([]);

    async function fetchFunction() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
            const blogComments = await response.json();
            setComments(blogComments)
            console.log(blogComments)
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
            <div className={styles.Post}>
                <div style={{
                    flexDirection: 'row',
                }}>
                    <img src='./account.png' style={{
                        heigt: 30,
                        width: 30
                    }} />
                    <h4>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h4>
                </div>
                <h6>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</h6>
                {
                    comments.map((comment) => (
                        <Card>
                            <Card.Body>
                                <h6>{comment.name}</h6>
                                <p>{comment.email}</p>
                                <p>{comment.body}</p>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Details