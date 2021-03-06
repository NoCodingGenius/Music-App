var fs = require('fs');

class Artist  {

  constructor() {
    this.constructor.artists = [];
    this.constructor.loaded = false;
  }

  get isLoaded() {
    return this.constructor.loaded;
  }

  getArtists() {
    return this.constructor.artists;
  }

  getArtist(id) {
    if (!id) {return false;}
    return this.constructor.artists[(id-1)];
  }

  saveArtists(artists)
  {
    try {
      this.constructor.artists = JSON.parse(artists);
    } catch (e) {
      this.constructor.artists = [];
    }
    this.constructor.loaded = true;
  }

  loadAll(callback) {
    var _this = this;
    fs.readFile('db/artists.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      _this.saveArtists(data);
    })
  };
}

module.exports = Artist;