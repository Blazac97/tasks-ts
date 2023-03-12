import type { IncomingMessage, ServerResponse } from 'http';

import genreModel from '../models/genre.model';
import { createResponse, parseBody } from '../utils/http';
// Контроллер для жанров.
export class GenreController {
  createGenre = async (req: IncomingMessage, res: ServerResponse) => {
    const { title } = await parseBody(req);
    const createdGenre = await genreModel.create({ title });
    return createResponse(res, 200, createdGenre);
  }
  getGenres = async (req: IncomingMessage, res: ServerResponse) => {
    const genres = await genreModel.getList();
    return createResponse(res, 200, genres);
  }
  getGenreById = async (req: IncomingMessage, res: ServerResponse) => {
    const genreId = req.url.split('/')[3];
    const genre = await genreModel.getById(genreId);
    return createResponse(res, 200, genre);
  }
  updateGenreById = async (req: IncomingMessage, res: ServerResponse) => {
    const genreId = req.url.split('/')[3];
    const { title } = await parseBody(req);
    const updatedGenre = await genreModel.updateById(genreId, { title });
    return createResponse(res, 200, updatedGenre);
  }
  deleteGenre = async (req: IncomingMessage, res: ServerResponse) => {
    const genreId = req.url.split('/')[3];
    const deletedGenre = await genreModel.deleteById(genreId);
    return createResponse(res, 200, deletedGenre);
  }
}

export default new GenreController();
