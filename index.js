const express = require('express')
import { urlencoded, json } from "body-parser";

// const path = require('path')
// import path from 'path';
// const PORT = 5001

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const app = express();
const PORT = process.env.PORT || 5000

app.use(urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin");
  next();
});
app.use(json());

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});
