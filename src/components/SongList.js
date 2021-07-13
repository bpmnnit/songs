import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // this.props === { songs: state.songs } // returned by connect() and mapsStateToProps function
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// connect function will take all its arguments and pass it to our SongList class component as a prop.
// So, mapStateToProps() and selectSong() action function will be available as props in SongList Component.
export default connect(mapStateToProps, {
  selectSong // this is equivalent to selectSong: selectSong
})(SongList);