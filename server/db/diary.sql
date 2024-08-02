DROP TABLE IF EXISTS diary;

CREATE TABLE diary(
    post_id INT GENERATED ALWAYS AS IDENTITY,
    post VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY(post_id)
);

INSERT INTO diary(post, date, category)
VALUES('hello', '1998-01-11', 'math');
