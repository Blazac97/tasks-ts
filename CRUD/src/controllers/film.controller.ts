import type { IncomingMessage, ServerResponse } from 'http';

import filmModel from '../models/film.model';
import { createResponse, parseBody } from '../utils/http';
// Контроллер для фильмов.
export class FilmController {
  createFilm = async (req: IncomingMessage, res: ServerResponse) => {
    const { title, annum, genres } = await parseBody(req);
    const createdFilm = await filmModel.create({ title, annum, genres });
    return createResponse(res, 200, createdFilm);
  }
  getFilms = async (req: IncomingMessage, res: ServerResponse) => {
    const films = await filmModel.getList();
    return createResponse(res, 200, films);
  }
  getFilmById = async (req: IncomingMessage, res: ServerResponse) => {
    const filmId = req.url.split('/')[3];
    const film = await filmModel.getById(filmId);
    return createResponse(res, 200, film);
  }
  updateFilmById = async (req: IncomingMessage, res: ServerResponse) => {
    const filmId = req.url.split('/')[3];
    const { title, annum } = await parseBody(req);
    const updatedFilm = await filmModel.updateById(filmId, { title, annum });
    return createResponse(res, 200, updatedFilm);
  }
  deleteFilm = async (req: IncomingMessage, res: ServerResponse) => {
    const filmId = req.url.split('/')[3];
    const deletedFilm = await filmModel.deleteById(filmId);
    return createResponse(res, 200, deletedFilm);
  }
}

export default new FilmController();
