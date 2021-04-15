import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useSelector} from 'react-redux';
import {FaStar} from "react-icons/fa"
import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
const ReviewModal = (props) =>{
      const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
        const [comment, setComment] = useState('');
         const dispatch = useDispatch();
           const user = useSelector((store) => store.user);
            const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({
            type:'ADD_REVIEW',
            payload: {
                user_id: user.id,
                comment: comment,
                rating: rating,
                title: props.book.title,
                author: props.book.author,
                image: props.book.book_image,
            } 
        });
        props.onHide()
        setComment('');

    }
    return (
      <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
                                             <form onSubmit={handleSubmit}>
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
         Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
                                     
            <div>
                <p>Rate</p>
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
                })}
              
            </div>
            <br></br>
            <p>Comment</p>
                                          <textarea required rows="4" cols="50" value={comment}  onChange={event => setComment(event.target.value)} ></textarea>
                                        
                                   
      </Modal.Body>
      <Modal.Footer>
          <Button type="submit">Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </form>
    </Modal>
      </>
    )
}
export default ReviewModal