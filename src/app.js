import express from 'express';
import path from 'path';

import {router} from './router'
import {config} from './config/config'

const app = express();

app.use( express.static( path.resolve( __dirname , 'public') ) );

app.use( router )

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});