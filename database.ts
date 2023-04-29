import { Database } from 'sqlite3';

class DBHandle {
    db: Database;

    constructor(file: string) {
        this.db = new Database(file);
    }
}