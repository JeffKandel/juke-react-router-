import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleAlbum extends Component {
  constructor () {
    super();
    this.state = {
      album: {}
    };
  }
  componentDidMount () {
    axios.get(`/api/albums/${this.props.match.params.albumId}`)
      .then(albumRes => {
        return albumRes.data
      }).then(album => {
        this.setState({album})
      });
  }
  render() {
    const album = this.state.album;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
