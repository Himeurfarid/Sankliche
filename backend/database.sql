CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE challenge (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  level_challenge VARCHAR(100) NOT NULL,
  collaboration VARCHAR(10) NOT NULL,
  description_challenge VARCHAR(900) NOT NULL,
  points VARCHAR(100) NOT NULL,
  time_challenge VARCHAR(100) NOT NULL,
  tips VARCHAR(200) NOT NULL,
	category VARCHAR(15)
) engine = InnoDB default charset = utf8mb4;

INSERT INTO challenge (title, level_challenge, collaboration, description_challenge, points, time_challenge, tips, category)
VALUES ('Miam-Miam !',"A1 - Facile", 'Solo', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..', "2", "10 min",'Lorem ipsum dolor sit amet.', "Restaurant"), 
       ('Visite la ville !',"B2 - Moyen", 'Equipe', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..', "5", "30 min",'Lorem ipsum dolor sit amet.', "Ville");

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    admin boolean not null default false,
    email varchar(255) UNIQUE NOT NULL,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    login varchar(255) DEFAULT NULL,
    city varchar(255) NOT NULL,
    hashedPassword varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO users (admin, email, firstname, lastname, login, city, hashedPassword)
VALUES
  (
    true,
    "farid@mail.fr",
    "Farid",
    "Himeur",
    "farid13",
    "Chalons en Champagne",
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
  );