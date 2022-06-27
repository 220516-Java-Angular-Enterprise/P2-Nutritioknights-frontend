import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Add the service we created in Step 1
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from './cache-service';


@Injectable()
export class CachingInterceptor implements HttpInterceptor {

    constructor(private readonly cacheService: CacheService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Don't cache if it's not a GET request
        console.log('in here intercept')
        if (req.method !== 'GET') {
            return next.handle(req);
        }

        // delete cache if no header is set by service's method
        if (!req.headers.get('cache-response')) {
            console.log('in delete')
            console.log(req.urlWithParams)
            console.log(this.cacheService.cacheMap.get(req.urlWithParams))
            if (this.cacheService.cacheMap.get(req.urlWithParams)) {
                console.log('in delete pt2')
                this.cacheService.cacheMap.delete(req.urlWithParams);
            }

            return next.handle(req);
        }

        // Checked if there is cached data for this URI
        const cachedResponse = this.cacheService.getFromCache(req);
        if (cachedResponse) {
            console.log('in here true')
            // In case of parallel requests to same URI,
            // return the request already in progress
            // otherwise return the last cached data
            return (cachedResponse instanceof Observable) ? cachedResponse : of(cachedResponse.clone());
        }
        console.log('in here false')

        // If the request of going through for first time
        // then let the request proceed and cache the response
        return next.handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.cacheService.addToCache(req, event);
                }
            }));
    }
}