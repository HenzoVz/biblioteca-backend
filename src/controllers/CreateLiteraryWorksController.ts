import { Request, Response, Router } from 'express';

import { LiteraryWorksModel } from '../models/LiteraryWorksModel';
import { ILiterayWorks } from '../dtos/ILiteraryWorks';

const literaryWorksRouter = Router();

const data: ILiterayWorks[] = [];

literaryWorksRouter.post('/', (request: Request, response: Response) => {
  try {
    const { ...rest }: ILiterayWorks = request.body;

    const literaryWorks = new LiteraryWorksModel(rest);

    data.push(literaryWorks);

    return response.status(200).json(literaryWorks);

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

literaryWorksRouter.get('/', (request: Request, response: Response) => {
  try {

    return response.json(data);

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

literaryWorksRouter.put('/:id', (request: Request, response: Response) => {

  try {
    const { id } = request.params;

    const { title, publishing_company, photo, authors }: ILiterayWorks = request.body;

    const indexFound = data.findIndex((value, index) => {
      if (value.id === id) {
        return index
      }
    });

    const createLiteraryWorks = { id: id, title, publishing_company, photo, authors }

    data[indexFound] = createLiteraryWorks

    return response.json(data);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export { literaryWorksRouter };
