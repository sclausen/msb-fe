import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
export class HttpUtil {

  static extractData(res: Response) {
    let body = res.json();
    console.log("got response: "+JSON.stringify(body));
    return body || { };
  }

  static handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
