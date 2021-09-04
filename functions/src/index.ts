import * as express from 'express';
import * as functions from 'firebase-functions';

const app = express();

const talentRoutes = require('./routes/talent-routes');


app.use('/talents', talentRoutes);

exports.api = functions.https.onRequest(app);