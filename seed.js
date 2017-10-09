const db = require('./models');

const bandList = [
  {
    name: 'Marmalakes', // 0
    genre: 'Folk',
    website: 'http://www.marmalakes.com/'
  },
  {
    name: 'Rotten Mangoes', // 1
    genre: 'Psychedelic Rock',
    website: 'http://therottenmangoes.bandcamp.com/'
  },
  {
    name: 'Modern Medicine', // 2
    genre: 'Indie Rock',
    website: 'http://modmed.bandcamp.com/'
  },
  {
    name: 'Magic Rockers of Texas', // 3
    genre: 'Rock',
    website: 'http://magicrockersoftexas.bandcamp.com/'
  },
  {
    name: 'Lomelda', // 4
    genre: 'Americana',
    website: 'http://lomelda.bandcamp.com/'
  },
  {
    name: 'Polyaction', // 5
    genre: 'Indie Rock',
    website: 'http://polyaction.bandcamp.com/'
  },
  {
    name: 'Sweet Spirit', // 6
    genre: 'Rock',
    website: 'http://www.sweetspiritatx.com/'
  },
  {
    name: 'Summer Salt', // 7
    genre: 'Surf Rock',
    website: 'http://www.summersaltband.com/'
  },
  {
    name: 'The Hermits', // 8
    genre: 'Rock',
    website: 'http://thehermits.bandcamp.com/'
  },
  {
    name: 'Calliope Musicals', // 9
    genre: 'Indie Pop',
    website: 'http://www.calliopemusicals.com/'
  },
  {
    name: 'Sip Sip', // 10
    genre: 'Rock',
    website: 'http://www.sipsipmusic.com/'
  },
  {
    name: 'Hikes', // 11
    genre: 'Math Rock',
    website: 'http://www.hikes.band/'
  },
  {
    name: 'Corduroi', // 12
    genre: 'Electronic',
    website: 'http://corduroi.bandcamp.com/'
  },
  {
    name: 'Ooni', // 13
    genre: 'Indie Pop',
    website: 'http://ooni.bandcamp.com/'
  },
  {
    name: 'Tamarron', // 14
    genre: 'Psychedelic Rock',
    website: 'http://tamarron.bandcamp.com/'
  },
  {
    name: 'Young Tongue', // 15
    genre: 'Indie Rock',
    website: 'http://www.youngtonguemusic.com/'
  }
];


const venueList = [
  {
    name: 'Mohawk',
    location: '912 Red River St.',
    website: 'https://mohawkaustin.com/',
    twentyOneAndUp: false
  },
  {
    name: 'Cheer Up Charlies',
    location: '900 Red River St.',
    website: 'http://www.cheerupcharlies.com/',
    twentyOneAndUp: true
  },
  {
    name: 'Sidewinder',
    location: '715 Red River St.',
    website: 'http://www.thesidewinderaustin.com/',
    twentyOneAndUp: false
  },
  {
    name: 'Hotel Vegas',
    location: '1502 E. Sixth St.',
    website: 'http://www.texashotelvegas.com/',
    twentyOneAndUp:  true
  },
];


const showList = [
  {
    bands: ['Marmalakes', 'Rotten Magoes', 'Modern Medicine'],
    date: '10/9/2017',
    venue: 'Mohawk',
    time: 9,
    coverCharge: 0
  },
  {
    bands: ['Magic Rockers of Texas', 'Lomelda', 'Polyaction', 'Sweet Spirit'],
    date: '10/9/2017',
    venue: 'Cheer Up Charlies',
    time: 8,
    coverCharge: 5
  },
  {
    bands: ['Summer Salt', 'The Hermits', 'Calliope Musicals'],
    date: '10/9/2017',
    venue: 'Sidewinder',
    time: 9,
    coverCharge: 0
  },
  {
    bands: ['Sip Sip', 'Hikes', 'Corduroi', 'Ooni'],
    date: '10/9/2017',
    venue: 'Hotel Vegas',
    time: 8,
    coverCharge: 5
  },
  {
    bands: ['Tamarron', 'Young Tongue', 'Summer Salt'],
    date: '10/10/17',
    venue: 'Mohawk',
    time: 9,
    coverCharge: 0
  },
  {
    bands: ['Sip Sip', 'The Hermits', 'Sweet Spirit', 'Calliope Musicals'],
    date: '10/10/17',
    venue: 'Cheer Up Charlies',
    time: 8,
    coverCharge: 5
  },
  {
    bands: ['Ooni', 'Marmalakes', 'Polyaction'],
    date: '10/10/17',
    venue: 'Sidewinder',
    time: 9,
    coverCharge: 5
  },
  {
    bands: ['Magic Rockers of Texas', 'Modern Medicine', 'Lomelda', 'Rotten Mangoes'],
    date: '10/10/17',
    venue: 'Hotel Vegas',
    time: 8,
    coverCharge: 0
  },
  {
    bands: ['Hikes', 'Ooni', 'Lomelda', 'Magic Rockers of Texas'],
    date: '10/11/17',
    venue: 'Mohawk',
    time: 8,
    coverCharge: 0
  },
  {
    bands: ['Rotten Mangoes', 'Summer Salt', 'Marmalakes'],
    date: '10/11/17',
    venue: 'Cheer Up Charlies',
    time: 9,
    coverCharge: 5
  },
  {
    bands: ['Corduroi', 'Sweet Spirit', 'Modern Medicine'],
    date: '10/11/17',
    venue: 'Sidewinder',
    time: 9,
    coverCharge: 5
  },
  {
    bands: ['Tamarron', 'The Hermits', 'Calliope Musicals', 'Polyaction'],
    date: '10/11/17',
    venue: 'Hotel Vegas',
    time: 8,
    coverCharge: 5
  },
];

db.Band.remove({}, function(err, bands) {
  console.log('removed all bands');
  db.Band.create(bandList, (err, bands) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`created ${bands.length} bands`);

    db.Venue.remove({}, function(err, venues) {
      console.log('removed all venues');
      db.Venue.create(venueList, (err, venues) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(`created ${venues.length} venues`);

        db.Show.remove({}, function(err, shows) {
          showList.forEach(showData => {
            var show = new db.Show({
              date: showData.date,
              time: showData.time,
              coverCharge: showData.coverCharge
            });

            showData.bands.forEach(band => {
              db.Band.findOne({name: band}, (err, foundBand) => {
                if (err) {
                  console.log(err);
                  return;
                }
                show.bands.push(foundBand);
              });
            });

            db.Venue.findOne({name: showData.venue}, (err, foundVenue) => {
              if (err) {
                console.log(err);
                return;
              }
              show.venue = foundVenue;
              show.save((err, savedShow) => {
                if (err) {
                  console.log(err);
                }
                console.log(savedShow);
              });
            });
          });
        });
      });
    });
  });
});











