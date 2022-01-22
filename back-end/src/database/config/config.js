module.exports = {
    dialect: 'postgres',
    host: 'localhost',//process.env.DB_HOST,
    username: 'postgres',//process.env.DB_USERNAME,
    password: 'root',//process.env.DB_PASSWORD,
    database: 'fullstack-test', //process.env.DB_DATABASE,
    define: {
        underscored: true,
    },
}