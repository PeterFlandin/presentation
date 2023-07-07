import { AuthorObj } from "./authors";
import { TypeBook } from "./typeOfBook";

export class Ouvrage {
    id!:        number;
    title!:     string;
    authorObj!: AuthorObj;
    summary!:   string;
    typeBook!:  TypeBook;
}
