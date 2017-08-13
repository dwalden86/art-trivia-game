import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import GamesList from './GamesList';

export default class Link extends React.Component {
    onLogout() {
      Accounts.logout();
    }
    onSubmit(e) {
      const url = this.refs.url.value.trim();

      e.preventDefault();

      if (url) {
        Meteor.call('links.insert', url)
        this.refs.url.value = '';
      }
    }
    render() {
    return (
      <div>
        <h1>Here is the links page</h1>
        <button onClick={this.onLogout.bind(this)}>LOGOUT</button>
        <GamesList/>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' ref='url' placeholder='URL' />
          <button>Add Link</button>
        </form>
      </div>

    );
  }
}
