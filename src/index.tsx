import React from 'react';

import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>This is my React app!</h1>;
};

const container = document.getElementById('cinema-web-app');
const root = createRoot(container);

root.render(<App />);
