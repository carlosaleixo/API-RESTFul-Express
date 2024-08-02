//nesses codigo estamos chamando os dados do arquivo .env  declarando-os por uma constante
const  dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const port = process.env.PORT

export default{
    port,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bwoqk6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    env: "development"
}
