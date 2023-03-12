import type { ID, IModel, WithBasicFields } from '../core/model';
import db from "../db";
export interface IFilm {
  title: string
  annum: number
  genres?: ID[]
}

export type FilmWithBasicFields = WithBasicFields<IFilm>;
// Создаём модель для фильмов.
export class FilmModel implements IModel<IFilm> {
  create = async (data:IFilm) => {
    const { genres, title, annum } = data;
    const newFilm = await db.query('INSERT INTO film (title, annum) values ($1,$2) RETURNING *',[title, annum]);
    if (Array.isArray(genres)) {
      const filmId = newFilm.rows[0].id;
      let createFilmGenresQuery = 'INSERT INTO film_genre (fk_film_id, fk_genre_id) values ';
      genres.forEach((genreId, index) => {
        createFilmGenresQuery += `(${filmId}, ${genreId})`;
        if (index !== genres.length - 1) {
          createFilmGenresQuery += ', ';
        }
      });
      createFilmGenresQuery += 'RETURNING *';
      await db.query(createFilmGenresQuery);
    }
    const result = {
      ...(newFilm.rows[0] || {}),
      genres: genres || [],
    };
    return result as FilmWithBasicFields;
  };
 // ======================Пояснение для создания фильмов======================================================
    /* METHOD : POST  {
    "title":"Остаться в живых",
    "annum":2003,
    "genres":[1,2,3...]  - перечисляем ID жанров через "," , ID - соответсвует id в таблице genre. Строка "genres" - не обязательна, если не хотим добавлять жанры.
     }
    */
 //  ===========================================================================
  getList = async () => {
    const films = await db.query('SELECT * FROM films');
    return films.rows as FilmWithBasicFields[];
  };
  getById = async (id: ID) => {
    const film = await db.query('SELECT * FROM film WHERE id = $1',[id]);
    return film.rows[0] as FilmWithBasicFields;
  };
  updateById = async (id: ID, data: IFilm) => {
    const updatedFilm = await db.query('UPDATE film set title=$1 annum=$2 WHERE id=$3 RETURNING *',[data.title,data.annum, id]);
    return updatedFilm.rows[0] as FilmWithBasicFields;
  };
  deleteById = async (id: ID) => {
    const deleteFilm = await db.query('DELETE FROM film WHERE id=$1 RETURNING *',[id]);
    return deleteFilm.rows[0] as FilmWithBasicFields;
  };
}

export default new FilmModel();
