require('./config/config');

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import router from './routes/router';

const app = express();
const clientPath = path.join(__dirname, '../client');

app.set('view engine', 'ejs');
app.set('views', clientPath);
app.use(express.static(clientPath));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

mongoose.connect(process.env.MONGODB_URI);

app.use('/', router);

export default app;
