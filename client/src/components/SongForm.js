import React, { Component } from 'react';

class SongForm extends Component {
  state = { name: '', place: null}

  nameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Song"
          required
          value={this.state.name}
          onChange={this.nameChange}
        />
      </form>
    )
  }
}

export default SongForm;