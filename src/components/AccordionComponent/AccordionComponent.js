import React, {Component} from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import FaqData from '../FaqData'
class AccordionComponent extends Component {

  render() {

    return (
        <Accordion defaultActiveKey="0">
          {FaqData.map((entry) => (
                  <Card className='accordionCard'>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey={entry.q}>
                        <h5 className='colorChange'>{entry.q}</h5>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={entry.q}>
                      <Card.Body>{entry.a}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
              )
          )}

        </Accordion>
    )
  }
}

export default AccordionComponent
