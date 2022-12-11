import React, { Component } from 'react';
import { Form, Header } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    q: '',
  };

  handleChange = e => {
    this.setState({ q: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.q);
    this.setState({ q: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.q}
            onChange={this.handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Header>
    );
  }
}
