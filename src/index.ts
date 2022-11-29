import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({path:"../../.env"});
import app from "./app";
import swaggerDocs from "./helpers/swaggerDocs";

//@ts-ignore
const PORT: number = process.env.PORT || 8000;
app.listen(PORT,async () => {
  console.log(`Server running on port : ${PORT}`);
  try {
   await  swaggerDocs(app, PORT);
  } catch (error) {
    console.log(error)
  }

});
export default app;
