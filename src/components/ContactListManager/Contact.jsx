import React from 'react';

export default function Contact({ contact, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', margin: '10px 0', borderRadius: '6px' }}>
      <h3>{contact.name} {contact.favorite && '⭐ (Favorite)'}</h3>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Job Title:</strong> {contact.job_title}</p>
      <p><strong>Birthday:</strong> {contact.birthday}</p>
      <p><strong>Notes:</strong> {contact.notes}</p>
      <p><strong>Website:</strong> <a href={contact.website} target="_blank" rel="noreferrer">{contact.website}</a></p>
      <button onClick={() => onDelete(contact.id)} style={{ marginTop: '8px', color: 'red' }}>Delete</button>
    </div>
  );
}