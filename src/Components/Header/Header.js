import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const { user, signOutUser } = useContext(UserContext);
    return (
        <div>
            <Container>
                <Navbar expand="lg" className="pt-4 text-primary">
                    <Navbar.Brand>
                        <img
                            src="https://i.ibb.co/FHBKmhh/travel-logo.png"
                            width="150"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="m-auto navBarSearchForm pl-3">
                            <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2" />
                        </Form>
                        <Nav className="ml-auto">
                            <Link className="px-4 text-white" to="/">News</Link>
                            <Link className="px-4 text-white" to="/">Destination</Link>
                            <Link className="px-4 text-white" to="/">Blog</Link>
                            <Link className="px-4 text-white" to="/">Contact</Link>

                            {
                                user ? (
                                    <>
                                        <Link className="px-4 font-weight-bold">{user.name.split(' ')[0]}</Link>
                                        <Link className="px-4 text-warning" onClick={signOutUser} >Logout</Link>

                                    </>
                                ) : (
                                        <Link to="/login" className="px-4 text-warning">Login</Link>

                                    )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;