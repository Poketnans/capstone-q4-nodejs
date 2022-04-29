import { Express } from 'express';
import swaggerUiExpress from 'swagger-ui-express';

import swaggerJson from './swagger.json';

const docs = (app: Express): void => {
  app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJson));
};

export default docs;
