import knex from 'knex';

export default knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '123456',
        database: 'test',
        ssl: false,
        charset: 'utf8',
        timezone: '+08:00',
    },
    pool: { min: 2, max: 32 },
});
