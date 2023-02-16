import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios('https://dogapi.dog/api/facts')
      .then((res) => setFact(res.data.facts[0]));
  }, []);

  return (
    <div>
      Hello World
      <p>
        {fact}
      </p>
    </div>
  );
}

export default MainPage;
