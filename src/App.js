import React from 'react';
import Tabs, { Tab } from './components/Tabs';

function App() {
  return (
      <Tabs initialIndex={1}>
        <Tab name="Tab 1" tabIndex={1} />
        <Tab name="Tab 2" tabIndex={2} />
      </Tabs>
  );
}

export default App;
