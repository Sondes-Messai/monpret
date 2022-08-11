import React, { Component } from 'react';
import { Container, Row, Col, Button , Form, FormGroup, FormControl} from 'react-bootstrap';

export default class ContactPage extends Component {
  constructor (){
    super();

    this._sendMessage = this._sendMessage.bind();
  }

  _sendMessage() {
  }

  render () {

    return (
        <Container >
          <Row className='my-3 p-3 bg-white rounded box-shadow'>
            <div className="section-title text-center">
              <h2>Prendre <span>contact</span></h2>
            </div>
            <Col md={4} sm={4} xs={12} mdOffset={4} >
              <form>
                  <Form.Control
                      id="formControlsText"
                      type="text"
                      placeholder="Entrez votre nom"
                    />
                  <Form.Control
                      id="formControlsEmail"
                      type="email"
                      placeholder="Entrez votre email"
                    />
                    <FormGroup controlId="formControlsTextarea">
                      <FormControl componentClass="textarea" rows={6} placeholder="Votre message" />
                    </FormGroup>
                    <FormGroup>
                      <Col smOffset={8} sm={2}>
                          <Button
                              bsStyle='primary'
                              onClick={ this._sendMessage }>
                              Envoyer
                          </Button>
                      </Col>
                    </FormGroup>
                </form>
              </Col>
          </Row>
        </Container>
    );
  }
}
