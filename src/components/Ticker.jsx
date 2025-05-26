import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

export default function Ticker() {
  const [datetime, setDatetime] = useState('');
  const [location, setLocation] = useState('Point Pleasant Beach, Singapore');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      setDatetime(now.toLocaleDateString('en-US', options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
        },
        () => setLocation('Point Pleasant Beach, Singapore')
      );
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container bg-primary text-white py-2">
      <div className="container">
        <div className="ticker-content">
          <span id="datetime">{datetime}</span>
          <span className="ms-4"><FaMapMarkerAlt className="me-2" />{location}</span>
          <span className="ms-4"><FaInfoCircle className="me-2" />Special Event: Marine Explorers Day every Saturday!</span>
        </div>
      </div>
    </div>
  );
}