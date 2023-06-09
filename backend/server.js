const app=require('./app');

const dotenv=require("dotenv");
const connectDatabase=require("./config/database")



// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//Config

dotenv.config({path:'backend/config/config.env'});


//Connecting to database
connectDatabase();


const server=app.listen(4000, () => {
    console.log(`Server is working on http://localhost:${4000}`);
  });

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});