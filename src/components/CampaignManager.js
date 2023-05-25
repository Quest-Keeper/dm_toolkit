import React, { useState } from 'react';
import { Card, Button, Form, Accordion, Badge, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SharedStyles.css';

const CampaignManager = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignName, setCampaignName] = useState('');
  const [sessionName, setSessionName] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  const addCampaign = () => {
    const newCampaign = {
      id: new Date().getTime(),
      name: campaignName,
      sessions: []
    };

    setCampaigns([newCampaign, ...campaigns]);
    setCampaignName('');
  };

  const addSession = (campaignId) => {
    const newSession = {
      id: new Date().getTime(),
      name: sessionName,
      notes: []
    };

    setCampaigns(campaigns.map(campaign => campaign.id === campaignId ? {...campaign, sessions: [newSession, ...campaign.sessions]} : campaign));
    setSessionName('');
  };

  const addNote = (campaignId, sessionId) => {
    const newNote = {
      id: new Date().getTime(),
      content: noteContent
    };

    setCampaigns(campaigns.map(campaign => campaign.id === campaignId ? {...campaign, sessions: campaign.sessions.map(session => session.id === sessionId ? {...session, notes: [newNote, ...session.notes]} : session)} : campaign));
    setNoteContent('');
  };

  return (
    <Card className="col-md-6 offset-md-3 card bg-dark text-white mb-3 shadow-lg">
      <Card.Header as="h5">Campaign Manager</Card.Header>
      <Card.Body>
        <Form inline className="justify-content-center mb-3">
          <Form.Control 
            type="text" 
            value={campaignName} 
            onChange={(e) => setCampaignName(e.target.value)} 
            placeholder="New Campaign"
            className="mr-2"
          />
          <Button variant="outline-light" onClick={addCampaign}>Add Campaign</Button>
        </Form>

        <Accordion>
          {campaigns.map(campaign => (
            <Card key={campaign.id} className="bg-dark text-white">
              <Accordion.Toggle as={Card.Header} eventKey={campaign.id.toString()}>
                {campaign.name}
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={campaign.id.toString()}>
                <>
                  <Form inline className="justify-content-center my-3">
                    <Form.Control 
                      type="text" 
                      value={sessionName} 
                      onChange={(e) => setSessionName(e.target.value)} 
                      placeholder="New Session"
                      className="mr-2"
                    />
                    <Button variant="outline-light" onClick={() => addSession(campaign.id)}>Add Session</Button>
                  </Form>

                  {campaign.sessions.map(session => (
                    <ListGroup variant="flush" key={session.id}>
                      <ListGroup.Item className="bg-dark text-white">
                        {session.name}
                        <Badge pill variant="light" className="ml-2" onClick={() => setSelectedSession(session.id === selectedSession ? null : session.id)}>
                          Notes
                        </Badge>
                      </ListGroup.Item>

                      {session.id === selectedSession && (
                        <>
                          <Form className="justify-content-center my-3 mx-5">
                            <Form.Control 
                              as="textarea" 
                              value={noteContent} 
                              onChange={(e) => setNoteContent(e.target.value)} 
                              placeholder="New Note"
                            />
                            <Button variant="outline-light" className="mt-2" block onClick={() => addNote(campaign.id, session.id)}>Add Note</Button>
                          </Form>

                          {session.notes.map(note => (
                            <ListGroup.Item key={note.id} className="bg-dark text-white">
                              {note.content}
                            </ListGroup.Item>
                          ))}
                        </>
                      )}
                    </ListGroup>
                  ))}
                </>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default CampaignManager;