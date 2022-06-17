import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CalculationRule} from "../model/calculationRule.model";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CalculationRuleService {
  private baseUrl = 'http://localhost:8080/calculationRule';

  constructor(private http: HttpClient) {
  }

  getCalculationRules() {
    return this.http.get<CalculationRule[]>(this.baseUrl.concat('/all')).pipe(catchError(this.handleError));
  }

  getVariablesById(id: string) {
    return this.http.get<string[]>(this.baseUrl.concat('/variablesById/', id)).pipe(catchError(this.handleError))
  }

  getInputsById(id: string) {
    return this.http.get<string[]>(this.baseUrl.concat('/inputsById/', id)).pipe(catchError(this.handleError))
  }

  executeCalculationRuleWithTwoParameters(id: string, inputA: number, inputB: number) {
    return this.http.get<number>(this.baseUrl.concat('/calculationExecution/', id, '/', inputA.toString(), ',',
      inputB.toString())).pipe(catchError(this.handleError));
  }

  executeCalculationRuleWithOneParameter(id: string, inputA: number) {
    return this.http.get<number>(this.baseUrl.concat('/calculationExecution/', id, '/', inputA.toString()))
      .pipe(catchError(this.handleError));
  }

  // Got this Code from Stackoverflow
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error("This is an Error."));
  }
}
