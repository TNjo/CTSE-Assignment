import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://tnpjcrew:MYscK7gH8T:U:mb@devcluster.cyvgckn.mongodb.net/?retryWrites=true&w=majority&appName=DevCluster`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("CTSE_DB");
export default db;