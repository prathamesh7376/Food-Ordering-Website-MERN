import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://prathamesh:Prathamesh7376@cluster0.pokel.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
