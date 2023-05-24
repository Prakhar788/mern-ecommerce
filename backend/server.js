const app=require('./app');

const dotenv=require("dotenv");



//Config

dotenv.config({path:'backend/config/config.env'});
app.listen(4000, () => {
    console.log(`Server is working on http://localhost:${4000}`);
  });


  