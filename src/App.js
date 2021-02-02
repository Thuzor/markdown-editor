import React, { useState } from 'react';
import './App.css';

import ReactMarkdown from 'react-markdown';

export default function App() {

    const [markdown, setMarkdown] = useState('');

    const handleChange = (e) => {
        setMarkdown(e.target.value)
    }

  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
