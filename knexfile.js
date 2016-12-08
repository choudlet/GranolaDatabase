// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/granola_bars'

  },

  production: {
    client: 'postgresql',
    connection: deployed_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
