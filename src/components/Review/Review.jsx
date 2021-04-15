import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import ReviewTableRow from '../ReviewTableRow/ReviewTableRow'

const Review = () =>{

    const review = useSelector((store) => store.review);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
  
    console.log('user id', user.id);
  useEffect(() => {
    dispatch({ type: 'FETCH_REVIEW', payload: user.id });
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
                                        <ReviewTableRow review={review}/>
                                    </>
                            )})}
                   
                

                </tbody>
            </Table>   
        </Container>   
        </>
    )
}

export default Review