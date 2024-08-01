import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PartnerProfileForm = ({ onSubmit, onClose }) => {
  return (
    <Form onSubmit={onSubmit} className="p-4 border rounded bg-light">
      <Form.Group controlId="partnerDetails">
        <Form.Label>Partner Profile Details</Form.Label>
        <Form.Control
          as="textarea"
          name="partnerDetails"
          placeholder="Enter partner profile details"
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-3">Submit</Button>
    </Form>
  );
};

export default PartnerProfileForm;
