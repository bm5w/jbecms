import React from 'react';
import {shallow, configure} from 'enzyme';
import App from './App.jsx';
import Adapter from 'enzyme-adapter-react-16';

// configure enzyme adpater
configure({"adapter": new Adapter()});

test('App renders without crashing', function() {
    shallow(<App />);
  });
