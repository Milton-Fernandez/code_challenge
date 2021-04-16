import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import {FaStar} from "react-icons/fa"
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import StarRating from '../StarRating/StarRating'
import swal from 'sweetalert';
import './BookItem.css'
import ReviewModal from '../ReviewModal/ReviewModal'




const BookItem = (props) =>{
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [comment, setComment] = useState('');
    const [reviewed, setReviewed] = useState(false);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
  
   

    return(
        <>
                        <div class="col-sm" id="d" id = {props.book.rank}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={props.book.book_image} />
                                    <Card.Body>
                                        <Card.Title className="book-name">{props.book.title}</Card.Title>
                                            <Card.Text>
                                            <p><strong>Author:</strong></p>
                                            {props.book.author}
                                            <p><strong>Description:</strong></p>
                                            {props.book.description}
                                            </Card.Text>


                          <Button variant="primary" onClick={() => setModalShow(true)}>
        Review
      </Button>

      <ReviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book = {props.book}
      />


                                    </Card.Body>
                            </Card> 
                        </div>
        </>
    )
}

export default BookItem;