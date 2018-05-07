import util from './util';

const emojis = require('../../../data/songData.json');


const loadSpotify = {

  enabled: false,
  currentTrack: null,

  init() {
    this.cacheDom();
    this.getData();
    this.bindEvents();
  },

  cacheDom() {
    this.dom = {};
    this.dom.nav = document.querySelector('.nav');
    this.dom.root = document.querySelector('.nowPlaying');
    this.dom.icon = this.dom.root.querySelector('.nowPlaying__icon');
    this.dom.content = this.dom.root.querySelector('.nowPlaying__content');
    this.dom.value = this.dom.root.querySelector('.nowPlaying__content--value');
  },

  getData() {
    const base = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks';
    const user = 'tyler-mcrobert';
    const apiKey = '1e87695de290cd017718696f211e84a4';
    const url = `${base}&limit=1&user=${user}&api_key=${apiKey}&format=json`;

    fetch(url)
      .then(response => response.json())
      .then((json) => {
        const track = json.recenttracks.track[0];

        this.currentTrack = {
          name: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
        };

        this.currentTrack.emoji = this.getEmoji();
        this.render(track);
      });
  },

  getEmoji() {
    this.getArtistData = () => {
      let artistData = null;

      emojis.artists.forEach((elem) => {
        if (elem.name === this.currentTrack.artist) {
          artistData = elem;
        }
      });

      return artistData;
    };

    this.getAlbumData = (artist) => {
      let albumData = null;

      if (artist && artist.albums) {
        artist.albums.forEach((album) => {
          if (loadSpotify.currentTrack.album.startsWith(album.title)) {
            albumData = album;
          }
        });
      }
      return albumData;
    };

    this.setEmoji = () => {
      const artistData = this.getArtistData();
      const albumData = this.getAlbumData(artistData);

      if (albumData) {
        return albumData.emoji;
      } else if (artistData && artistData.emoji) {
        return artistData.emoji;
      }
      return null;
    };

    return this.setEmoji();
  },

  toggleModule() {
    this.enabled = !this.enabled;
    this.render();
  },

  bindEvents() {
    this.dom.icon.addEventListener('click', () => {
      this.toggleModule();
    });
  },

  render(track) {
    if (track) {
      this.dom.value.innerHTML = `${track.name} - ${track.artist['#text']}`;
    }

    if (this.currentTrack.emoji) {
      this.dom.icon.innerHTML = this.currentTrack.emoji;
    }

    this.dom.icon.classList.add('-spinning');

    if (!this.enabled) {
      this.dom.nav.classList.remove('-nowPLayingEnabled');
    } else {
      this.dom.nav.classList.add('-nowPLayingEnabled');
    }
  },
};

export default loadSpotify;