import React, { useState, useEffect } from 'react';
import './AppNewTalent.css';
import { Button, Modal, Container, Row, Col, Form, Alert } from 'react-bootstrap';

import { doRequestTalentAPI } from '../../../core/helpers/RequestAPIHelper';


function AppModalTalent(props) {
    
    const initialData = {
        "first_name": "",
        "first_lastname": "",
        "second_lastname": "",
        "actual_job": "",
        "industry_id": 1,
        "phone": "",
        "salary": '',
        "location_id": 1,
        "birthday": "",
        "gender_id": 1,
        "experience": '',
        "comments": '',
        "profile_img": '',
        "job_position_id": 1
    }
    const initialDataAlert = {
        show: false,
        title: '',
        body: '',
        type: 'success'
    };

    const [show, setShow] = useState(props.show);
    const [data, setData] = useState(initialData);
    const [alert, setAlert] = useState(initialDataAlert);

    const handleClose = () => {
        props.closeModal();
        setShow(false);
        setAlert(false);
        setData(initialData)
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    const prepareImg = async () => {
        const file = document.querySelector('#profile-img').files[0];
        let oldProperties = { ...data };
        oldProperties.profile_img = await toBase64(file)
        setData(oldProperties);
    }

    const saveTalent = () => {
        doRequestTalentAPI('create', 'POST', data)
            .then(talent => {
                console.log(talent);
                setAlert({
                    show: true,
                    title: 'Success!',
                    body: 'The talent was created',
                    type: 'success'
                });
                props.updateTable();
            }).catch(error => {
                console.error(error);
                setAlert({
                    show: true,
                    title: 'Ups! Error',
                    body: 'Sorry, something has gone wrong!',
                    type: 'danger'
                });
            });
    }

    const onChangeHandler = (e) => {
        let oldProperties = { ...data };
        const { id, value } = e.target;
        oldProperties[id] = value;
        console.log(oldProperties);
        setData(oldProperties);
    }

    return (
        <Modal show={show}
            onHide={handleClose}
            size="lg"
            className="talent-gpac-modal">
            <Modal.Header closeButton>
                <Modal.Title>Add New Talent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Row className="show-grid">
                                <Col xs={12} className="text-center">
                                    <img src={data.profile_img || ''} alt="Profile"
                                        className="img-fluid" />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12}>
                                    <Form>
                                        <Form.File
                                            id="profile-img"
                                            label="Profile picture"
                                            custom
                                            onChange={prepareImg}
                                        />
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={8}>
                            <Form.Group controlId="first_name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name"
                                    value={data.first_name || ''}
                                    onChange={onChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="first_lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name"
                                    value={data.first_lastname || ''}
                                    onChange={onChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="actual_job">
                                <Form.Label>Actual Job</Form.Label>
                                <Form.Control type="text" placeholder="Actual Job"
                                    value={data.actual_job || ''}
                                    onChange={onChangeHandler} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Form.Group controlId="salary">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" placeholder="Salary"
                                    value={data.salary || 0}
                                    onChange={onChangeHandler} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone"
                                    value={data.phone || ''}
                                    onChange={onChangeHandler} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group controlId="birthday">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control type="date" placeholder="Birthday"
                                    value={data.birthday ? data.birthday.toString().substr(0, 10) : ''}
                                    onChange={onChangeHandler} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <Form.Group controlId="industry_id">
                                <Form.Label>Industry</Form.Label>
                                <Form.Control as="select"
                                    value={data.industry_id || ''}
                                    onChange={onChangeHandler}>
                                    <option value="1">TI</option>
                                    <option value="2">Construction</option>
                                    <option value="3">Health</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group controlId="location_id">
                                <Form.Label>Location</Form.Label>
                                <Form.Control as="select"
                                    value={data.location_id || ''}
                                    onChange={onChangeHandler}>
                                    <option value="1">NJ</option>
                                    <option value="2">NY</option>
                                    <option value="3">MN</option>
                                    <option value="4">IL</option>
                                    <option value="5">TX</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group controlId="gender_id">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" 
                                    value={data.gender_id} 
                                    onChange={onChangeHandler}>
                                    <option value="1">Female</option>
                                    <option value="2">Male</option>
                                    <option value="3">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="job_position_id">
                                <Form.Label>Job Position</Form.Label>
                                <Form.Control as="select"
                                    value={data.job_position_id}
                                    onChange={onChangeHandler}>
                                    <option value="1">Project Manager</option>
                                    <option value="2">Construction Supervisor</option>
                                    <option value="3">Concrete Foreman</option>
                                    <option value="4">Building Analyst</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Form.Group >
                                <Form.Label>Experience</Form.Label>
                                <textarea
                                    name=""
                                    id="experience"
                                    cols="30"
                                    rows="5"
                                    placeholder="Experience"
                                    className="w-100"
                                    value={data.experience || ''}
                                    onChange={onChangeHandler}>
                                </textarea>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Form.Group >
                                <Form.Label>Comments</Form.Label>
                                <textarea
                                    name=""
                                    id="comments"
                                    cols="30"
                                    rows="5"
                                    placeholder="Comments"
                                    className="w-100"
                                    value={data.comments || ''}
                                    onChange={onChangeHandler}>
                                </textarea>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Alert show={alert.show} variant={alert.type} onClose={() => setAlert(initialDataAlert)} dismissible>
                                <Alert.Heading>{alert.title}</Alert.Heading>
                                <p>{alert.body}</p>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" className="bg-purple-gpack" onClick={saveTalent}>
                    Save Talent
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AppModalTalent;