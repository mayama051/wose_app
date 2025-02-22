const express = require('express');
const audiencesRoute = express.Router();
const AudiencesModel = require('../model/Audiences');

const getAudiences = (tid) => AudiencesModel.find({'tid': tid})

audiencesRoute.route('/').get(async (req, res, next) => {
  try {
    const data = await getAudiences(req.query.tid).clone();
    console.log('Tutorial audiences fetched succeed:', JSON.stringify(data))
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500);
    return next(e)
  }
})

audiencesRoute.route('/').post(async (req, res, next) => {
  try {
    const audiences = await AudiencesModel.find({'uid': req.body.uid}).clone();
    if (audiences.length === 0) {
      await AudiencesModel.create(req.body);
      console.log('Tutorial audience added succeed:', JSON.stringify(req.body))
      res.status(200);
    }
  } catch (error) {
    console.error(error)
    res.status(500);
    return next(error)
  }
})

audiencesRoute.route('/:id').delete((req, res, next) => {
  AudiencesModel.deleteOne({'uid': req.params.id}, (error, data) => {
    if (!error) {
      console.log('Tutorial audiences deleted succeed:', JSON.stringify(data))
      res.status(200).json(data);
    } else {
      return next(error)
    }
  })
})

module.exports = audiencesRoute;