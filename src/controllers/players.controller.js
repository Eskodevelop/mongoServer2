import _ from 'lodash';
import Player from '../models/player.model';

const create = (req, res) => {
    const player = Player(req.body);
    player.save((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(201).json(data);
    })
}

const list = (req, res) => {
    Player.find((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(200).json(data);
    });
}

const read = (req, res) => {
    const id = req.params.id;
    Player.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(200).json(data);
    });
}

const update = (req, res) => {
    const id = req.params.id;
    Player.findById(id).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json('Player not found!');
        }
        const player = _.extend(data, req.body);
        player.save((err, data) => {
            if (err) {
                return res.status(400).json(err.message);
            }
            res.status(200).json(data);
        })
    });
}

const remove = (req, res) => {
    const id = req.params.id;
    Player.findById(id).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json('Player not found!');
        }
        data.remove((err, data) => {
            if (err) {
                return res.status(400).json(err.message);
            }
            res.status(200).json('Player deleted!');
        });
    })
}


export default { create, list, read, update, remove }