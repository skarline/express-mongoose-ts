export default {
  app: {
    port: 5000
  },
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
  }
}
