import React from 'react'
import Home from 'pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApiCtxProvider } from 'context/ApiCtx'
const App = () => {

  return (
    <div className='App'>
      <Router>
          <ApiCtxProvider>
            <Routes>
                <Route exact path="/" element={<Home  />} />
                <Route exact path="/:type" element={<Home  />} />
                <Route exact path="/:type/:search" element={<Home />} />
            </Routes>
          </ApiCtxProvider>
      </Router>
    </div>
  );
}
export default App;

