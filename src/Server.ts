import * as passport from 'passport';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as queryBoolean from 'express-query-boolean';
import Logger from './core/Logger';
import { async } from './core/ErrorHandler';

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(queryBoolean());

app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  preflightContinue: true,
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Accept-Version',
  ],
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version',
  );
  next();
});

app.use(passport.initialize());

app.get('/v1', (req, res) => {
  res.json({
    version: 'v1',
    application: 'Template service',
    license: 'MIT',
  });
});

app.use('/v1/hello/', (req, res) => {
  res.json('');
});

app.all('*', async(() => {
  throw new Error('Routes not found');
}));

const PORT = 3000;

(() => {
  app.listen(PORT, (err) => {
    if (err) {
      Logger.error(err);
      return;
    }
    Logger.info(`Server listening on port: ${PORT}`);
  });
})();
