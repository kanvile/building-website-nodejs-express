const express = require('express');

const speakersRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const topSpeakers = await speakersService.getList();
    console.log(topSpeakers);
    response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers });
  });

  router.use('./speakers', speakersRoutes(params));
  router.use('./feedback', feedbackRoutes(params));

  return router;
};
