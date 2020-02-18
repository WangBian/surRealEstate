import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PropertiesService {
    private propertiesUrl = '/api/properties';

    constructor(private http: HttpClient) { }

    // get("/api/properties")
    getAllProperties(): Promise<void | any[]> {
        return this.http.get(this.propertiesUrl)
            .toPromise()
            .then(response => response as any[])
            .catch(this.handleError);
    }

    // get("/api/properties/:city&:state")
    getProperties(city: string, state: string): Promise<void | any[]> {
        return this.http.get(this.propertiesUrl + '/?city=' + city + '&state=' + state)
            .toPromise()
            .then(response => response as any[])
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}