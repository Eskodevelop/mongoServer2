import _ from 'lodash';
import Rival from '../models/rival.model';

const create = (req, res) => {
    const rival = Rival(req.body);
    rival.save((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(201).json(data);
    })
}

const list = (req, res) => {
    Rival.find((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(200).json(data);
    });
}

const read = (req, res) => {
    const id = req.params.id;
    Rival.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json(err.message);
        }
        res.status(200).json(data);
    });
}

const update = (req, res) => {
    const id = req.params.id;
    Rival.findById(id).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json('Rival not found!');
        }
        const rival = _.extend(data, req.body);
        rival.save((err, data) => {
            if (err) {
                return res.status(400).json(err.message);
            }
            res.status(200).json(data);
        })
    });
}

const remove = (req, res) => {
    const id = req.params.id;
    Rival.findById(id).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json('Rival not found!');
        }
        data.remove((err, data) => {
            if (err) {
                return res.status(400).json(err.message);
            }
            res.status(200).json('Rival deleted!');
        });
    })
}


export default { create, list, read, update, remove }