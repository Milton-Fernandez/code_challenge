import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import StarRating from '../StarRating/StarRating'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <StarRating />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
              <Form.Control value="comment" as="textarea" rows={3} onChange={event => setComment(event.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const BookItem = ({book}) =>{
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
  

 
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({
            type:'ADD_REVIEW',
            payload: {
                user_id: user.id,
                comment: commnet,
                rating: 1,
                title: book.title,
                author: book.author,
                image: book.book_image,
            } 
        });

    }
   

    return(
        <>
                        <div class="col-sm" id="d" id = {book.rank}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={book.book_image} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                            <Card.Text>
                                            <p><strong>Author:</strong></p>
                                            {book.author}
                                            <p><strong>Description:</strong></p>
                                            {book.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => setModalShow(true)}>Review</Button>

                                    </Card.Body>
                            </Card> 
                        </div>
                    <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default BookItem;