import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class EmailInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler) { //on passe ici en param la requête originale
        request: request.clone({ //requête clonée 
            setHeaders: {
                Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        })
        return next.handle(request)
    }
}