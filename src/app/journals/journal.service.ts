import { Journal } from './journal.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JournalService {
    private journalsUrl = '/api/jounarls';

    constructor(private http: HttpClient) { }

    // get("/api/contacts")
    getJouranls(): Promise<void | Journal[]> {
        return this.http.get(this.journalsUrl)
            .toPromise()
            .then(response => console.log(response))
            .catch(this.handleError);
    }

    // post("/api/contacts")
    createContact(newContact: Journal): Promise<void | Journal> {
        return this.http.post(this.journalsUrl, newContact)
            .toPromise()
            .then(response => response as Journal)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}