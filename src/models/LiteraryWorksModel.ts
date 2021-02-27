import { uuid } from 'uuidv4';
import { ILiterayWorks } from '../dtos/ILiteraryWorks';


export class LiteraryWorksModel implements ILiterayWorks {
  id: string;
  title: string;
  publishing_company: string;
  photo: string;
  authors: string[];

  constructor({ title, publishing_company, photo, authors }: ILiterayWorks) {
    this.id = uuid();
    this.title = title;
    this.publishing_company = publishing_company;
    this.photo = photo;
    this.authors = authors;
  }
}
