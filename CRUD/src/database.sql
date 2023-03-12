-- Создаём таблицу с жанрами.
CREATE TABLE genre(
    id SERIAL PRIMARY KEY NOT NULL,
    title varchar(30) NOT NULL
);
-- Создаём таблицу с фильмами.
CREATE TABLE film(
    id SERIAL PRIMARY KEY NOT NULL,
    title varchar(100) NOT NULL,
    annum varchar(4) NOT NULL
);
-- Создаём связь многие ко многим.
CREATE TABLE film_genre (
    id SERIAL PRIMARY KEY NOT NULL,
    fk_film_id  integer REFERENCES film (id),
    fk_genre_id integer REFERENCES genre (id)
);

