CREATE TABLE IF NOT EXISTS users (
  id serial UNIQUE NOT NULL,
  uuid VARCHAR (30) UNIQUE NOT NULL PRIMARY KEY,
  first_name VARCHAR (100),
  last_name VARCHAR (100),
  password VARCHAR (200),
  email VARCHAR (200) UNIQUE NOT NULL,
  image_url VARCHAR (500),
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS permissions (
  id serial UNIQUE NOT NULL,
  uuid VARCHAR (30) UNIQUE NOT NULL PRIMARY KEY,
  permission_name VARCHAR (40) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
  id serial UNIQUE NOT NULL,
  uuid VARCHAR (30) UNIQUE NOT NULL PRIMARY KEY,
  role_name VARCHAR (20) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS roles_permissions (
  id serial UNIQUE NOT NULL,
  role_uuid VARCHAR REFERENCES roles(uuid) ON DELETE CASCADE,
  permission_uuid VARCHAR REFERENCES permissions(uuid) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS users_roles (
  id serial UNIQUE NOT NULL,
  user_uuid VARCHAR REFERENCES users(uuid) ON DELETE CASCADE,
  role_uuid VARCHAR REFERENCES roles(uuid) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS users_permissions (
  id serial UNIQUE NOT NULL,
  user_uuid VARCHAR REFERENCES users(uuid) ON DELETE CASCADE,
  permission_uuid VARCHAR REFERENCES permissions(uuid) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS meetings (
  id serial UNIQUE NOT NULL,
  uuid VARCHAR (30) UNIQUE NOT NULL PRIMARY KEY,
  passcode VARCHAR (40) NOT NULL,
  attendee_limit INTEGER DEFAULT 250,
  owner VARCHAR REFERENCES users(uuid) ON DELETE CASCADE,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS users_meetings (
  id serial UNIQUE NOT NULL,
  user_uuid VARCHAR REFERENCES users(uuid) ON DELETE CASCADE,
  meeting_uuid VARCHAR REFERENCES meetings(uuid) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);
