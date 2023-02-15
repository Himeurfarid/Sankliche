CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE challenge
(
	id                INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title             VARCHAR(200)        NOT NULL,
	description_challenge VARCHAR(900)        NOT NULL,
	publication_date  date                NOT NULL,
	link              VARCHAR(100)        NOT NULL,
	thumbnail VARCHAR(200) NOT NULL,
	category_id       INT                 NOT NULL,
	CONSTRAINT fk_video_category
		FOREIGN KEY (category_id)
			REFERENCES category (id)
) engine = InnoDB
  default charset = utf8mb4;

INSERT INTO video (title, description_video, publication_date, link, thumbnail, category_id)
VALUES ('NBA - Résumé VF : Golden State Warriors @ Los Angeles Lakers',
		'Avec un Stephen Curry en triple-double, son premier depuis 2016 et un Jordan Poole inspiré, les Warriors ont renversé les Lakers malgré les 67 pts du duo James-Davis.',
		'2021-10-20', 'https://www.youtube.com/embed/tSGtWkQ30no',
		'https://i.ytimg.com/vi/fmuDBDbYwYE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1LN1SOPKkLmxK_fXR__wI-ljluQ',
		2);
