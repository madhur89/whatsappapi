

import React, { useState } from 'react';
import axios from 'axios';

const WhatsAppForm = () => {
  const [receiverNumber, setReceiverNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual API endpoint
    const apiUrl = 'https://whinta.com/api/create-message';

    const requestData = {
      appkey: '03f01ccb-d7ea-4f7d-bac6-fd68d30a0b01',
      authkey: 'KBkEnfZFkce4HyGI7aDKlWyxrCTtKQNhIXsAt72T3hOoB67U6K',
      to: receiverNumber,
      message: message,
    };

    try {
      const response = await axios.post(apiUrl, requestData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Send WhatsApp Message</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="receiverNumber">Receiver Number (with country code):</label>
          <input
            type="tel"
            id="receiverNumber"
            name="receiverNumber"
            required
            value={receiverNumber}
            onChange={(e) => setReceiverNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send WhatsApp Message</button>
      </form>
    </div>
  );
};

export default WhatsAppForm;
