import React, { Component } from 'react';
import Songs from '../components/Songs';

const fakeAlbum = {
  name: 'Yellow Submarine',
  id: 2,
  imageUrl: 'http://fillmurray.com/300/300',
  songs: [{
    id: 4,
    name: 'London Calling',
    artists: [
      { name: 'Bill' }
    ],
    genre: 'Punk',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }]
}

export default class SingleAlbum extends Component {

  render() {
    console.log("params", this.props.match.params)
    const album = fakeAlbum;

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
