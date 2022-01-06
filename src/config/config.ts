export const db: string =
  process.env["MONGO_URI"] ||
  "mongodb://beny:wefox@127.0.0.1:27017/test?authSource=admin";
