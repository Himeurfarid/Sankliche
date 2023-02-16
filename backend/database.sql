CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE challenge (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description_challenge VARCHAR(900) NOT NULL,
  points VARCHAR(100) NOT NULL,
  tips VARCHAR(200) NOT NULL,
	category VARCHAR(15)
) engine = InnoDB default charset = utf8mb4;

INSERT INTO challenge (title, description_challenge, points, tips, category_id)
VALUES ('Lorem', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..', "2", 'Lorem ipsum dolor sit amet.', "Restaurant");
