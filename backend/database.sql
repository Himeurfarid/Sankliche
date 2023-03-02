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

CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  lastname VARCHAR(200) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  username VARCHAR(10) NOT NULL,
  email VARCHAR(900) NOT NULL,
  hashedPassword VARCHAR(100) NOT NULL
) engine = InnoDB default charset = latin1;

INSERT INTO user (lastname, firstname, username, email, hashedPassword)
VALUES ('Froissart','Lucie','Lulu','lulu@gmail.com','123456789');

CREATE TABLE team (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  team_name VARCHAR(200) NOT NULL,
) engine = InnoDB default charset = latin1;

INSERT INTO team (team_name)
VALUES ('Team Test');