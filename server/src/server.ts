import express from "express";
import cors from "./middleware/morgen/cors/cors";
import morgan from "./middleware/morgen/morgen";
import usersRoute from './users/routes.users';
import mongoose from 'mongoose';
const app = express();

// connectToDatabase();

app.use(express.json());

app.use(cors)
app.use(morgan)



const PORT = 8008;
app.listen(PORT, () => console.log(`server run in port ${PORT}!`));






// app.ts
// import productRoute from './api/Banners/Banners.Routes';


// const app: express.Application = express();
// const PORT: number = 8080;

mongoose
  .connect('mongodb+srv://team-alpha:1234@cluster0.orqsdi2.mongodb.net/your_database_name')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// const corsOptions: CorsOptions = {
//   origin: '*',
// };

app.use(express.json());
// app.use(cors(corsOptions));
// app.use(morgan('dev'));

// app.use('/api/banners', productRoute);
app.use('/api/users', usersRoute);
// app.use('/api/categories', categoryRouter); 

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

