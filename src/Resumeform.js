import React, { useState } from 'react';

function Resumeform({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmitin(event) {
    event.preventDefault();
    onSubmit({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <div>
    <form onSubmit={handleSubmitin}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
    </div>
  );
}

export default Resumeform;
