import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import StarRating from '../StarRating/StarRating'
import {FaStar} from "react-icons/fa"
import './ReviewTableRow.css';
const ReviewTableRow = ({review}) =>{
   
    const [hover, setHover] = useState(null);
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
                <td><img src={review.image} width="300" height="400"></img></td>
                <td>{review.title}</td>
                <td>{review.author}</td>

                {!edit ?
                <>
                <td>                
                    
                    {[...Array(5)].map((star,i) =>{
                    const ratingValue= i  + 1;

                    return  <label>

                        <FaStar 
                        className="star" 
                        size = {25} 
                        color={ratingValue <= ( rating) ? "#ffc107":"#e4e5e9"}
                        /></label>
                })}
                
                
                </td>
                <td>{review.comment}</td>
                </>
                :
                <>



                <td>                
                    {[...Array(5)].map((star,i) =>{
                    const ratingValue= i  + 1;

                    return  <label>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={()=>setRating(ratingValue)}

                        />
                        <FaStar 
                        className="star" 
                        size = {25} 
                        color={ratingValue <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        /></label>
                })}</td>




                <td><input type = "string" value = {comment} onChange={event => setComment(event.target.value)} ></input></td>
                </>
                }
                    {!edit ?
                        <td><Button onClick={event => handleEdit()} >Edit</Button></td>
                        :
                        <td>
                        <Button   onClick={event => handleExit()}>Exit Edit</Button><br></br><br></br>
                        <Button onClick={editSubmit}>Save Changes</Button></td>
                        }
                <td><Button variant="danger" onClick={() => {
                        console.log(review.id);
                        dispatch({ type: 'REMOVE_REVIEW', payload: review.id });
                        dispatch({ type: 'FETCH_REVIEW' });}}>Delete</Button></td>
            </tr>
        </>
    )
}

export default ReviewTableRow;