import * as express from 'express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const app = express();

const talentRoutes = require('./routes/talent-routes');


app.use('/talents', talentRoutes);

exports.api = functions.https.onRequest(app);