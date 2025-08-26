import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routers from './routers';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', routers)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;