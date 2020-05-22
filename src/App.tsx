import React from 'react';
import { Logo } from './components/logo/index';

export const App = () => {
  const guid = '000-000-000-000'
  return (
    <>
      <Logo guid={guid} />

      <section id="main">
        <div className="mainGrid">
          <div className="item1">
            <p>Procedurally generated Space Stations</p>
            <p>Procedurally generated Space Ships</p>
            <p>Procedurally generated Weapons</p>
            <p>Procedurally generated Chairs!</p>
            <p>Procedurally generated Space Stations</p>
          </div>
          <div className="item2"></div>
          <div className="item3"></div>
        </div>
      </section>

      <section id="footer">
        <div className="container">
        </div>
        <div id="copyright">
          <ul>
            <li>&copy; Matter Flow</li>
            <li><a href="https://kurtlourens.com">Kurt Lourens</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
