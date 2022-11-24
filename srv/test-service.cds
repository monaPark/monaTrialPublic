using { fioritest } from '../db/schema';

service Main {
    entity Products as projection on fioritest.Products;
}