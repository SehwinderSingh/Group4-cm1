import React, { useState } from 'react';
import Contact from './Contact';

export default function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: 'sajib',
    email: 'sajibsuvo2@gmail.com',
    phone: '0449523678',
    job_title: 'Software Engineer',
    birthday: '12/04/2000',
    notes: 'very intelligent person',
    website: 'www.sajib.com',
    favorite: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, { ...formData, id: Date.now() }]);
    setFormData({
      name: 'Arnob',
      email: 'arnob45@gmail.com',
      phone: '055763678',
      job_title: 'Data Scientist',
      birthday: '12/09/1999',
      notes: 'good person',
      website: 'www.arnob.com',
      favorite: false,
    });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Contact List Manager</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="job_title" placeholder="Job Title" value={formData.job_title} onChange={handleChange} />
        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
        <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
        <input type="url" name="website" placeholder="Website (https://...)" value={formData.website} onChange={handleChange} />
        <label>
          <input type="checkbox" name="favorite" checked={formData.favorite} onChange={handleChange} /> Favorite
        </label>
        <button type="submit">Add Contact</button>
      </form>

      <div>
        {contacts.length === 0 ? (
          <p>No contacts added yet.</p>
        ) : (
          contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}