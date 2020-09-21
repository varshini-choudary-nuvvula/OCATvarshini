import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Link, Router } from '@reach/router';
import FancyDiv from 'components/FancyDiv';
import Dynamic from 'containers/Dynamic';
import './app.scss';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([ `dynamic` ]);

const App : React.FC = () =>
  <Root>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dynamic">Dynamic</Link>
    </nav>
    <div className="content">
      <FancyDiv>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </FancyDiv>
    </div>
  </Root>;

export default App;
