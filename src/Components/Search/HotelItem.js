import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const HotelItem = (props) => {
    const { image, title, type1, type2, dollars } = props.hotel;
    console.log(props);
    return (
        <div style={{ height: "auto" }}>
            <Card className="p-0 m-0 shadow my-2">
                <Row className="m-3 d-flex align-items-center">
                    <Col md={6} className="m-0 p-0">
                        <img src={image} className="w-100 img-fluid" alt="" />
                    </Col>
                    <Col md={6} className="m-0 pr-0">
                        <h4 className="text-dark">{title}</h4> <br />
                        <div className="d-flex justify-content-between text-dark">
                            <span>2 guests</span>
                            <span>3 Bedrooms</span>
                            <span>4 Beds</span>
                            <span>5 Bats</span>
                        </div>
                        <p>{type1}</p>
                        <p>{type2}</p>
                        <div className="d-flex justify-content-between align-items-center text-dark ">
                            <span>${dollars}/per-night</span>
                            <span>$167 total</span>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default HotelItem;