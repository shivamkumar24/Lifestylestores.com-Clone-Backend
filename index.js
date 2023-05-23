const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { adminRouter } = require("./routes/admin.route");
const { menRouter } = require("./routes/men.route");
const { womenRouter } = require("./routes/women.route");
const { kidRouter } = require("./routes/kid.route");
const { shoesRouter } = require("./routes/shoes.route");
const { bagRouter } = require("./routes/bag.route");
const { beautyRouter } = require("./routes/beauty.route");
const { allProductsRouter } = require("./routes/allProducts.route");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { cartRouter } = require("./routes/cart.route");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/men", menRouter);
app.use("/women", womenRouter);
app.use("/kid", kidRouter);
app.use("/shoes", shoesRouter);
app.use("/bag", bagRouter);
app.use("/beauty", beautyRouter);
app.use("/allproduct", allProductsRouter);
app.use(authMiddleware);
app.use("/cart", cartRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database");
  } catch (error) {
    console.log("Connection Error:", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
