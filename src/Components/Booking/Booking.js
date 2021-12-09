import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';
import locations from '../Data/Data';
import InputDate from './InputDate';
import InputItem from '../Input/InputItem';
import Header from '../Header/Header';


const Booking = () => {
    const { id } = useParams();
    const { bookingInfo, setBookingInfo } = useContext(UserContext);

    const [formDate, setFormDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000));
    const history = useHistory();

    const [booking, setBooking] = useState({
        location: {},
        origin: '',
        destination: ''
    })

    useEffect(() => {
        const bookingLocation = locations.find(location => location.id.toString() === id)
        setBooking(previousState => ({
            ...previousState, location: bookingLocation,
            destination: bookingLocation.name
        }))
    }, [id])

    const onChangeHandler = event => {
        setBooking(previousState => ({ ...previousState, [event.target.name]: event.target.value }))
    }

    const submitHandler = event => {
        setBookingInfo({ ...bookingInfo, ...booking, formDate, toDate })
        history.push(`/search/${id}`)
        event.preventDefault();
    }

    return (
        <div className="home">
            <Header></Header>
            <Container className="mt-5 pt-5">
                <Row>
                    <Col sm={6} xl={6}>
                        <Jumbotron className="bg-transparent px-0">
                            <h1 className="font-weight-bold">{booking.location.name}</h1>
                            <p>{booking.location.description}</p>
                        </Jumbotron>
                    </Col>
                    <Col xl={1} />
                    <Col sm={6} xl={5}>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={submitHandler} autoComplete="off">
                                    <InputItem value={booking.origin}
                                        onChangeHandler={onChangeHandler} name="origin" label="Origin" placeholder="Origin" autoFocus />
                                    <InputItem value={booking.destination}
                                        onChangeHandler={onChangeHandler} name="destination" placeholder="Destination" label="Destination" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputDate label='Form' date={formDate} setDate={setFormDate} />
                                        </div>
                                        <div className="col-md-6">
                                            <InputDate label='To' date={toDate} setDate={setToDate} />
                                        </div>
                                    </div>

                                    <Button className="w-100" variant="warning" type="submit">Start Booking</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;