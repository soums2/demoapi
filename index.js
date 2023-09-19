import express from  'express';
import bodyparser from 'body-parser';
import usersRoutes from './routes/users.js';
import postRoutes from './routes/post.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());
// Users Route
app.use('/users', usersRoutes);
// Post Route
app.use('/post', postRoutes);
// Main Function
app.get('/',(req,res)=> {
    console.log("Text");

    res.send("Hello From HomePage");
});

app.listen(PORT,()=> console.log(`Server Running http://localhost:${PORT}`));