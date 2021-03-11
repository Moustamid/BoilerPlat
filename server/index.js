import { dirname } from 'path';
import { fileURLToPath } from 'url';

//-npm modules
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
import chalk from 'chalk';
//-Locaol modules :
import './models/Users.js';
import './services/passport.js';
import { authRoutes } from './routes/authRoutes.js';

// SECTION:  ENV Variables :

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

// SECTION: Mongoose - connect to MongoDB :

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      chalk
        .hex('#4d13d1')
        .bold(`MongoDb Connected : ${connect.connection.host}`)
    );
  } catch (error) {
    console.error(chalk.hex('#cf000f').bold(`Error : ${error.message}`));
    process.exit(1);
  }
};

connectDB();

// SECTION:  creating Express App  :

const app = express();

//* Adding cookies to Express :
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);

//* telling PassportJs to use cookies :
app.use(passport.initialize());
app.use(passport.session());

// SECTION: Auth Routes :
authRoutes(app);

// REMEMBER: delete this route :
app.get('/', (req, res) => {
  res.send(
    `<h2>Express Server running on port ${PORT} in ${process.env.NODE_ENV} mode ...  👩‍💻</h2>`
  );
});

// SECTION: Starting the server ( Express asking Nodejs to listen on the Port specified ) :

// - Dynamic Port Binding (Prod and Dev) :
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    chalk
      .hex('#26a65b')
      .bold(
        `Express Server running on port ${PORT} in ${process.env.NODE_ENV} ...👩‍💻`
      )
  );
});

// REMEMBER: user model must be imported before passport :
