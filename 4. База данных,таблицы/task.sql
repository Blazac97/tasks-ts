
--Создаём БД
--Использовать команду отдельно от остального кода!!!
CREATE DATABASE task;

--Создаём таблицу person
CREATE TABLE person 
(
    person_id integer GENERATED ALWAYS AS IDENTITY NOT NULL,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    birth_year varchar(4) NOT NULL,
    bio varchar,
    country varchar(32) NOT NULL,
    profession varchar(32) NOT NULL,
    photo_link varchar,
    CONSTRAINT PK_person_person_id PRIMARY KEY (person_id)
);

--Создаём таблицу film
CREATE TABLE film 
(
    film_id integer GENERATED ALWAYS AS IDENTITY NOT NULL,
    title varchar NOT NULL,
    film_description varchar NOT NUll,
    tagline varchar NOT NULL,
    annum varchar(4) NOT NULL,
    country varchar(32) NOT NULL,
    fk_person_director_id integer REFERENCES person(person_id) NOT NULL,
    fk_person_scenario_id integer REFERENCES person(person_id) NOT NULL,
    fk_person_producer_id integer REFERENCES person(person_id) NOT NULL,
    fk_person_operator_id integer REFERENCES person(person_id) NOT NULL,
    fk_person_composer_id integer REFERENCES person(person_id) NOT NULL,
    fk_person_artist_id integer REFERENCES person(person_id) NOT NULL,
    fk_person_montage_id integer REFERENCES person(person_id) NOT NULL,
    budget integer NOT NULL,
    marketing integer NOT NULL,
    drivers_in_the_us integer,
    drivers_in_the_world integer,
    date_premiere_in_russia date,
    date_premiere_in_world date,
    release_date_dvd date,
    age varchar(2),
    age_rating varchar,
    duration time,
    banner_link varchar,
    rating real,
    CONSTRAINT PK_film_film_id PRIMARY KEY (film_id)
);

--Создаём связи многие ко многим для lead_roles.
CREATE TABLE film_person_lead_roles
(
    film_person_lead_roles_id GENERATED ALWAYS AS IDENTITY NOT NULL,
    fk_film_id integer REFERENCES film(film_id) NOT NULL,
    fk_person_lead_roles_id integer REFERENCES person(person_id) NOT NULL,
    CONSTRAINT PK_film_person_lead_roles_id PRIMARY KEY (film_person_lead_roles_id)
);

--Создаём связи многие ко многим для second_roles.
CREATE TABLE film_person_second_roles
(
    film_person_second_roles_id GENERATED ALWAYS AS IDENTITY NOT NULL,
    fk_film_id integer REFERENCES film(film_id) NOT NULL,
    fk_person_second_roles_id integer REFERENCES person(person_id) NOT NULL,
    CONSTRAINT PK_film_second_lead_roles_id PRIMARY KEY (film_person_second_roles_id)
   );

--Создаём таблицу жанров.
-- Используем в pk smallinteger ,поскольку жанров не много, удобнее будет добавлять к фильмам.
CREATE TABLE genre
(
    genre_id smallint NOT NULL,
    title varchar(32) NOT NULL,
    genre_description varchar(256),
    CONSTRAINT PK_genre_genre_id PRIMARY KEY (genre_id)
);

--Создаём связи многие ко многим для film_genre.
CREATE TABLE film_genre
(
    film_genre_id GENERATED ALWAYS AS IDENTITY NOT NULL,
    fk_film_id integer REFERENCES film(film_id) NOT NULL,
    fk_genre_id integer REFERENCES genre(genre_id) NOT NULL,
    CONSTRAINT PK_film_genre_id PRIMARY KEY (film_genre_id)
);

--Создаём таблицу с просмотрами по странам.
CREATE TABLE viewers
(
    viewers_id GENERATED ALWAYS AS IDENTITY NOT NULL,
    country varchar(32) NOT NULL,
    amount integer,
    annum varchar(4) NOT NULL,
    fk_film_id integer REFERENCES film(film_id) NOT NULL,
    CONSTRAINT PK_viewers_viewers_id PRIMARY KEY (viewers_id)
);