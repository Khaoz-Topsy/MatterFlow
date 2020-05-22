import React from 'react';

import { randomGuid } from './helper/guidHelper';

import { Sidebar } from './components/sidebar/index';
import { Logo } from './components/logo/index';
import { Main } from './components/main/index';

interface IState {
  guid: string
}

export class App extends React.PureComponent<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      // guid: '000-000-000-000'
      guid: `${randomGuid()}-${randomGuid()}-${randomGuid()}-${randomGuid()}`
    }
  }

  render() {
    return (
      <>
        <Sidebar guid={this.state.guid} />
        <div className="content">
          <Logo guid={this.state.guid} />
          <Main guid={this.state.guid} />

          <section id="footer">
            <div className="container">
            </div>
            <div id="copyright">
              <ul>
                <li>&copy; Matter Flow</li>
                <li>Created by: Avgust Stupin</li>
                <li>Web Design: <a href="https://kurtlourens.com">Kurt Lourens</a></li>
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  }
}
