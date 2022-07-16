const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users')

const app = express();
app.use(bodyParser.json());

app.use('/users', userRouter);

app.get('/', (req, res, next) => {
  res.send('<h1>home page</h1><p>welcome to home</p>')
});


app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);