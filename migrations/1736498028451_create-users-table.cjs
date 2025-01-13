exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE roles (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL UNIQUE
    );
    `);

  pgm.sql(`
    CREATE TABLE users (
      pk SERIAL PRIMARY KEY,
      id UUID DEFAULT gen_random_uuid() NOT NULL UNIQUE,
      username VARCHAR(30) NOT NULL UNIQUE,
      role_id INT NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(64) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `);

  pgm.sql(`
    INSERT INTO roles (name) VALUES ('admin'), ('viewer');
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE IF EXISTS roles;
    `);
  pgm.sql(`
    DROP TABLE IF EXISTS users;
  `);
};

