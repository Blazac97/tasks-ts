import dotenv from 'dotenv';
dotenv.config();

import type { IncomingMessage, ServerResponse } from 'http';
import http from 'http';

import { createResponse } from './utils/http';

const port = process.env.PORT;

import filmHandler from './routes/film.routes';
import genreHandler from './routes/genre.routes';

http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const { url } = req;

    // Обработчик для фильмов.
    if (url.startsWith('/api/films')) {
      return await filmHandler(req, res);
    }

    // Обработчик для жанров.
    if (url.startsWith('/api/genres')) {
      return await genreHandler(req, res);
    }

    // Если такой маршрут не обнаружен.
    return createResponse(res, 404);
  } catch (error) {
    return createResponse(res, 500, { error: error.toString() });
  }
}).listen(process.env.PORT, () => {
  console.log(`Server started http://localhost:${port}`);
});
