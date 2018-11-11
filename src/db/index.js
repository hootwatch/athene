import mongoose from "mongoose";

const { MONGO_USER, MONGO_PASSWORD, MONGO_URI } = process.env;

const options = {
  user: MONGO_USER,
  pass: MONGO_PASSWORD,
  useNewUrlParser: true,
  useCreateIndex: true
};

const db = () =>
  Promise.resolve(
    mongoose.connect(
      MONGO_URI,
      options
    )
  );

db()
  .then(() => console.log("> 🗄  Mongo connected"))
  .catch(e => console.log(e.message));
