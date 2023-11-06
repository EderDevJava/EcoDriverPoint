import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') !== null) {
      //vai unir o token (JWT) + com Bearer
      const token = 'Bearer ' + localStorage.getItem('token');
      //sobrescrevendo a parte da requisição do angular e vamos para o token no cabeçalho
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token),
      });      
      //va pra o back-end
      console.log('Token: ' + token);
      console.log('Token request: ' + tokenRequest);
      return next.handle(tokenRequest);
    } else {
      //não tendo authorizado ele continua a requisição normal
      return next.handle(req);
    }
  }
  constructor() {}
}

//precisamos registrar o Interceptor como provedor de serviço em um módulo
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true,
    },
  ],
})
//declaração para fazer a leitura dessa class criada
export class HttpInterceptorModule {}
