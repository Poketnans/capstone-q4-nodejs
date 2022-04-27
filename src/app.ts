import express, { json } from 'express';
import coursesRoutes from './routes/coursesRoutes';
import projectsRoutes from './routes/projectsRoutes';
import userRoutes from './routes/userRoutes';
import reviewsRoutes from './routes/reviewsRoutes';
import docs from './docs';

const app = express();

app.use(json());

app.use('/users', userRoutes);
app.use('/courses', coursesRoutes);
app.use('/projects', projectsRoutes);
app.use('/reviews', reviewsRoutes);

docs(app);

export default app;
