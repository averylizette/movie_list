DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies 
    (
        id int not null auto_increment,
        name varchar(80) not null,
        watched varchar(6),
        primary  key(id)
    );

INSERT INTO movies(name, watched)
    VALUES('my neighbor totoro', 'false'),('mean girls', 'true'),('mean girls 2', 'false'),('john mulany comeback kid', 'true'),('john mulany new in town', 'false');

