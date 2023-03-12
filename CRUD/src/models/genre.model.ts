import type { ID, IModel, WithBasicFields } from '../core/model';
import db from "../db";
export interface IGenre {
  title: string
}

export type GenreWithBasicFields = WithBasicFields<IGenre>;
// Создаём модель для жанров.
export class GenreModel implements IModel<IGenre> {
  create = async (data: IGenre) => {
    const newGenre = await db.query('INSERT INTO genre (title) values ($1) RETURNING *',[data.title]);
    return newGenre.rows[0] as GenreWithBasicFields;
  };
  getList = async () => {
    const genres = await db.query('SELECT * FROM genre');
    return genres.rows as GenreWithBasicFields[];
  };
  getById = async (id: ID) => {
    const genre = await db.query('SELECT * FROM genre WHERE id = $1',[id]);
    return genre.rows[0] as GenreWithBasicFields;
  };
  updateById = async (id: ID, data: IGenre) => {
    const updatedGenre = await db.query('UPDATE genre set title=$1 WHERE id=$2 RETURNING *',[data.title, id]);
    return updatedGenre.rows[0] as GenreWithBasicFields;
  };
  deleteById = async (id: ID) => {
    const deleteGenre = await db.query('DELETE FROM genre WHERE id=$1 RETURNING *',[id]);
    return deleteGenre.rows[0] as GenreWithBasicFields;
  };
}

export default new GenreModel();
