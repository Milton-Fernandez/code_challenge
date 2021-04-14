import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const ReviewTableRow = ({review}) =>{
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [rating,setRating] = useState(review.rating);
    const [comment,setComment] = useState(review.comment);
    const handleEdit = () =>{
        setEdit(true);
    }

    const handleExit = () =>{
        setEdit(false);
    }


    const editSubmit = () =>{
        setEdit(false);

        const dataObj = {
            id: review.id,
            rating: rating,
            comment: comment,
        }
        dispatch({type: 'UPDATE_REVIEW', payload: dataObj});
        dispatch({ type: 'FETCH_REVIEW' });
     
    }
    return(
        <>
            <tr>
                <td>{review.image}</td>
                <td>{review.title}</td>
                <td>{review.author}</td>

                {!edit ?
                <>
                <td>{review.rating}</td>
                <td>{review.comment}</td>
                </>
                :
                <>
                <td><input type="number" value = {rating} onChange={event => setRating(event.target.value)}></input></td>
                <td><input type = "string" value = {comment} onChange={event => setComment(event.target.value)} ></input></td>
                </>
                }
                    {!edit ?
                        <td><button onClick={event => handleEdit()} >edit</button></td>
                        :
                        <td><button   onClick={event => handleExit()}>Exit Edit</button><button onClick={editSubmit}>Save Changes</button></td>
                        }
                <td><button onClick={() => {
                        console.log(review.id);
                        dispatch({ type: 'REMOVE_REVIEW', payload: review.id });
                        dispatch({ type: 'FETCH_REVIEW' });}}>delete</button></td>
            </tr>
        </>
    )
}

export default ReviewTableRow;