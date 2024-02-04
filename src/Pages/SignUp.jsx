import React, { useState} from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router';

const Signup = ({ setUser, setToken }) => {
    const navigate = useNavigate()
    const API = import.meta.env.VITE_BASE_URL
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password_hash: ''
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch($`{API}/users`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json();
        console.log(res)
        if (res.user && res.user.id) {
            setUser(res.user);
            setToken(res.token);
            setFormData((prev) => ({
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                password_hash: ''
            }));
            navigate ('/app/Maps')
        } else {
            console.log(res);
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
};
    return (
        <Container style={{ marginTop: "50px" }}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="username">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Put Your Name On The List! (Username)"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Updates for the After Party(email)"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password_hash">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Get Your Wristband (password)"
                                name="password_hash"
                                value={formData.password_hash}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default Signup;