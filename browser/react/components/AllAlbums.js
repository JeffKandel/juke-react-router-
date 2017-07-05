import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class AllAlbums extends Component {
    constructor () {
        super();
        this.state = {
            albums: []
        };
    }
    componentDidMount() {
        axios.get('/api/albums/')
            .then(res => res.data)
            .then(albums => {
                this.setState({ albums })
            });
    }
  render () {
    const albums = this.state.albums;
    const selectAlbum = this.props.selectAlbum;
    console.log(this.props);

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link className="thumbnail" to={`/albums/${album.id}`}>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
