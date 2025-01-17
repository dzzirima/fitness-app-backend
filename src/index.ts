import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: "../../.env" });
import app from "./app";
import swaggerDocs from "./helpers/swaggerDocs";

//@ts-ignore
const PORT: number = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
  swaggerDocs(app, PORT);
});
export default app;
