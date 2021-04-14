import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
const Review = () =>{
    const review = useSelector((store) => store.review);
    const dispatch = useDispatch();
    console.log(review)
  useEffect(() => {
    dispatch({ type: 'FETCH_REVIEW' });
  },[]);
    return(
        <>
        </>
    )
}

export default Review