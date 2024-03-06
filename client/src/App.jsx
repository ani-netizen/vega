import React from 'react';

import CompanyProfiles from './components/CompanyCard/CompanyProfiles';
import Resources from './components/ResourceCard/Resources';

function App() {
  return (
    <div className="App">
      <main>
        <CompanyProfiles />
        <Resources />
      </main>
    </div>
  );
}

export default App;
