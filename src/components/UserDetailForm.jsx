import React from 'react';
import { Form, Button } from 'react-bootstrap';

const UserDetailForm = ({ onSubmit, formData, handleChange, onClose }) => {
  return (
    <Form onSubmit={onSubmit} className="p-4 border rounded bg-light">
      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-3">Submit</Button>
    </Form>
  );
};

export default UserDetailForm;
