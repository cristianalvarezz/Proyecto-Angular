import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';





//lo que hace el interceptors es obtener los request y agregarle headers params o errores y procesar la informacion
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  //el primer argumento es lo que sse esta solicitando 
  //el next es el siguiente paso que deberia realizar 
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    const headers = new HttpHeaders({
      'token-usuario':'ABC1234532632675'
    });
 
    const reqClone=req.clone({
      headers
    });


    console.log('Paso por el interceptor')
    return next.handle(reqClone).pipe(
      catchError(this.mensajeError)
    );
  }

  mensajeError(error:HttpErrorResponse){
    console.log('Sucedio un error');
    console.warn(error)
    return throwError('Error personalizado')
  }
}
