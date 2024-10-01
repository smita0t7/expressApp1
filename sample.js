import express from 'express';
import bodyParser from 'body-parser'

//  Module to import Database Users
import userRoutes from './routes/users.js'

const app = express();
const PORT = 5000

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

//  Make all users available at the route path
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));