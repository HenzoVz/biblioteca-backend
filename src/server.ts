import express from 'express';

import { routers } from './routers';

const app = express();

app.use(express.json());
app.use(routers);

app.listen(3000, () => {
  console.log('🚀 Server started on port 3000!');
});
