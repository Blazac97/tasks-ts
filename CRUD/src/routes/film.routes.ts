import type { IncomingMessage, ServerResponse } from 'http';
import { createResponse } from '../utils/http';

import filmController from '../controllers/film.controller';
// Обработчик для фильмов.
const handler = async (req: IncomingMessage, res: ServerResponse) => {
  switch (req.method) {
    // GET /api/films
    // GET /api/films/:filmId
    case 'GET':
      const filmId = req.url.split('/')[3];
      if (filmId) {
        return await filmController.getFilmById(req, res);
      }
      return await filmController.getFilms(req, res);

    // POST /api/films
    case 'POST':
      return await filmController.createFilm(req, res);

    // PUT /api/films/:filmId
    case 'PUT':
      return await filmController.updateFilmById(req, res);

    // DELETE /api/films/:filmId
    case 'DELETE':
      return await filmController.deleteFilm(req, res);
  
    default: return createResponse(res, 404);
  }
}

export default handler;