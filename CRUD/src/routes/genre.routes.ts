import type { IncomingMessage, ServerResponse } from 'http';
import { createResponse } from '../utils/http';

import genreController from '../controllers/genre.controller';
// Обработчик для жанров.
const handler = async (req: IncomingMessage, res: ServerResponse) => {
  switch (req.method) {
    // GET /api/genres
    // GET /api/genres/:genreId
    case 'GET':
      const genreId = req.url.split('/')[3];
      if (genreId) {
        return await genreController.getGenreById(req, res);
      }
      return await genreController.getGenres(req, res);

    // POST /api/genres
    case 'POST':
      return await genreController.createGenre(req, res);

    // PUT /api/genres/:genreId
    case 'PUT':
      return await genreController.updateGenreById(req, res);

    // DELETE /api/genres/:genreId
    case 'DELETE':
      return await genreController.deleteGenre(req, res);

    default: return createResponse(res, 404);
  }
}

export default handler;