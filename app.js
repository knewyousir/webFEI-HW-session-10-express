var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

const Schema = mongoose.Schema;

const mongoUri = 'mongodb://devereld:dd2345@ds113746.mlab.com:13746/pirates';

const PirateSchema = new Schema({
  name: String,
  weapon: String,
  vessel: String
});

const Pirate = mongoose.model('Pirate', PirateSchema);

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/pirates', function(req, res) {
  Pirate.find({}, function(err, results) {
    return res.send(results);
  });
});

app.get('/api/pirates/:id', function(req, res) {
  let id = req.params.id;
  Pirate.deleteOne({ _id: id }, result => {
    return res.sendStatus(200);
  });
});

app.post('/api/pirates', function(req, res) {
  console.log(req.body);
  Pirate.create(req.body, (err, pirate) => {
    if (err) return console.log(err);

    return res.send(pirate);
  });
});

app.get('/api/import', (req, res) => {
  Pirate.create(
    {
      name: 'John Rackham',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga minus molestiae placeat ad iure asperiores nam, recusandae dolor quasi debitis, eveniet reiciendis veritatis et! Sit provident, praesentium laborum tempore.',
      year: 1724,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Donald Trump',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia consectetur, praesentium eaque ad odit. Nihil molestiae ut temporibus commodi natus delectus cumque architecto, eligendi ad repellat, quasi porro eos dignissimos.',
      year: 1800,
      weapon: 'Twitter',
      vessel: 'Bounty'
    },
    {
      name: 'Sea Dog',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem autem rerum, nam minima dolorum blanditiis, velit aliquid assumenda illum totam magni sint laudantium laboriosam odit minus distinctio repellendus. Cumque, quod.',
      year: 1684,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Jean Lafitte',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus pariatur ratione dicta, neque sed, odio maxime, saepe autem libero dolore nobis. Dicta deleniti, illo natus nemo suscipit impedit quod amet!',
      year: 1629,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Crab McPirate',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam ullam eveniet eius provident, omnis quos ex quam maiores id fugit accusantium ea ipsa tenetur excepturi vero quis nulla aliquid!',
      year: 1734,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Atlantic Terror',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio unde reiciendis, similique recusandae velit corrupti fugit quasi eos labore dicta eligendi possimus fugiat. Doloribus fugit consequuntur harum perspiciatis, dicta enim?',
      year: 1753,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Oyster Boy',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis nemo animi, qui, vero delectus odit, quaerat aspernatur ullam magni unde aliquid amet consequuntur magnam. Molestiae architecto deleniti temporibus inventore.',
      year: 1543,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Mussel Man',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque labore pariatur similique necessitatibus ut deserunt, esse quod ipsum in quam, provident aspernatur culpa hic quisquam dolores odit nemo obcaecati commodi.',
      year: 1825,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    {
      name: 'Jumbo the Prawn',
      image: 'avatar.svg',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia odio, tempora eum vel et, nobis optio adipisci quibusdam, asperiores a quia non pariatur. Neque, sequi est voluptatem labore hic eum!',
      year: 1850,
      weapon: 'Sword',
      vessel: 'Bounty'
    },
    function(err) {
      if (err) return console.log(err);
      return res.sendStatus(202);
    }
  );
});

// initialization
mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = app;
