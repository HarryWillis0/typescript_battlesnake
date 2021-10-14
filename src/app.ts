/**
 * End points for battlesnake (/, /start, /move and /end)
 */
import express, { Request, Response } from 'express';

import { snakeMetaData } from './consts';

const app = express();
const port = process.env.PORT || 3000;

/**
 * GET: /
 * Called periodically by game engine
 * Should respond with MetaResponse type
 */
app.get('/', (req: Request, res: Response) => {
  res.status(200).json(snakeMetaData);
});

/**
 * POST: /start
 * Called once at beginning of each game
 */
app.post('/start', (req: Request, res: Response) => {
  res.status(200);
});

/**
 * POST: /move
 * Called once per turn of each game
 * - receives info about the board
 * - respond with move
 */
app.post('/move', (req: Request, res: Response) => {
  // todo
});

/**
 * POST: /end
 * Called once at the end of each game
 */
app.post('/end', (req: Request, res: Response) => {
  // todo
});

app.listen(port, () => {
  console.log(`Battlesnake listening on ${port}`);
});
