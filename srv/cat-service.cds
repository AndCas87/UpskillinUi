using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Books   as projection on my.Books;
    entity Authors as projection on my.Authors;
    entity Genres  as projection on my.Genres;
}
