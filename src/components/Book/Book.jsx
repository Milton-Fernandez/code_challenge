import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import StarRating from '../StarRating/StarRating'
import "./Book.css";
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
              <Form.Control as="textarea" rows={3} />
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

const Book = () =>{
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [comment, setComment] = useState('');


    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nZwk50Bzk3GoGqGeejh1PfbxnmP5PdND`);
            setArticles(res.data.results.books);

            setLoading(false);
        };
        getArticles();

    }, []);

    console.log(articles);
   

    return(
        <>
        <div>
            <div class="container">
                <div class="row">
                {articles.map((book)=>{
                    return(
                        <div class="col-sm">

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
                
                        )})}
                </div>
            </div>
        </div>

                                                        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}


export default Book;
