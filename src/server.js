import express from 'express';
import path from 'path';
import cors from 'cors';
import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';
import postRouter from './routes/postRouter';
import apiAuthRouter from './routes/apiAthRouter';
import authRouter from './routes/authRouter';
import customRender from './utils/customRender';
import {
  isAuthApi, isAuth, pathMiddleware, userSession,
} from './middlewares';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

require('dotenv').config();

const PORT = process.env.PORT ?? 3005;

const app = express();

app.engine('js', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'js');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: 'nklvsnklvdsnjvsnj',
  saveUninitialized: false,
  resave: false,
}));

app.use(pathMiddleware);
app.use(userSession);

app.use('/', indexRouter);
app.use('/post', isAuth, postRouter);
app.use('/auth', authRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
