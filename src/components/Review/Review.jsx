import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'


import Table from 'react-bootstrap/Table'
const Review = () =>{
    const review = useSelector((store) => store.review);
    const dispatch = useDispatch();
    console.log(review)
  useEffect(() => {
    dispatch({ type: 'FETCH_REVIEW' });
  },[]);

  console.log(review);
    return(
        <>
        <Container>
            <h2>Review</h2>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th>Comment</th>
                        <th></th>
                        <th></th>
                        </tr>
                </thead>
                <tbody>

                        {review.map((review)=>{
                            return(
                                    <>
                                    <tr>
                                        <td>{review.image}</td>
                                        <td>{review.title}</td>
                                        <td>{review.author}</td>
                                        <td>{review.rating}</td>
                                        <td>{review.comment}</td>
                                        <td><button>edit</button></td>
                                        <td><button>delete</button></td>
                                    </tr>
                                    </>
                            )})}
                   
                

                </tbody>
            </Table>   
        </Container>   
        </>
    )
}

export default Review