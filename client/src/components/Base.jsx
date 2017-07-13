import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

import RaisedButton from 'material-ui/RaisedButton';

const Base = ({ children }) => (
  <div>
    <div className="top-bar container">
      <div className="top-bar-left">
        <IndexLink to="/">Splitit</IndexLink>
        <RaisedButton
          href="https://github.com/jthomasi/splitit"
          target="_blank"
          label="Github Link"
          primary={true}
        />
      </div>

      

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;