// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',

    connection: {
      filename: './data/database.db3'
    },

    useNullAsDefault: true,

    migrations:{
      directory:'./data/migrations'
    },

    seeds:{
      directory:'./data/seeds'
    },

    pool:{ //foreign key constraints inforced with this
      afterCreate:(conn, done) =>{
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
   production: {
    client: 'pg',

    connection: process.env.DATABASE_URL,
    ssl:{
      rejectUnauthorized:false
    },
    migrations:{
      directory:'./data/migrations'
    },

    seeds:{
      directory:'./data/seeds'
    },

  },

};
