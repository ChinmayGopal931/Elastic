import React, { useState, useEffect } from 'react';

interface StatusBarProps {
  status: string;
}

const StatusBar = ({ status }: StatusBarProps) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [messageType, setMessageType] = useState('success');

  useEffect(() => {
    switch (status) {
      case 'success':
        setMessage('Transaction successful');
        setIsVisible(true);
        setMessageType('success');
        break;

      case 'error':
        setMessage('Transaction failed');
        setIsVisible(true);
        setMessageType('error');
        break;

      default:
        setMessage('');
        setIsVisible(false);
        setMessageType('success');
    }
  }, [status]);

  return (
    <p
      className={`mt-4 text-center text-sm ${isVisible ? 'block' : 'hidden'} ${
        messageType === 'success' ? 'text-success' : 'text-error'
      }`}
    >
      {message}
    </p>
  );
};

export default StatusBar;
