import React, { useState, useEffect  } from 'react';
import { Card, Button, Form, Accordion, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SharedStyles.css';

const CampaignManager = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignName, setCampaignName] = useState('');
  const [sessionName, setSessionName] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  
  useEffect(() => {
    const savedCampaigns = localStorage.getItem('campaigns');
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }, [campaigns]);
  
  const addCampaign = () => {
    const newCampaign = {
      id: new Date().getTime(),
      name: campaignName,
      sessions: []
    };

    setCampaigns([newCampaign, ...campaigns]);
    setCampaignName('');
  };

  const deleteCampaign = (campaignId) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== campaignId));
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
            <Accordion.Item eventKey={campaign.id.toString()} key={campaign.id}>
              <Accordion.Header>
                {campaign.name}
                <Button variant="dark" onClick={() => deleteCampaign(campaign.id)}>Delete Campaign</Button>
              </Accordion.Header>
              <Accordion.Body> 
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

                <Accordion defaultActiveKey="0">
                  {campaign.sessions.map(session => (
                    <Accordion.Item eventKey={session.id.toString()} key={session.id}>
                      <Accordion.Header>{session.name}</Accordion.Header>

                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default CampaignManager;