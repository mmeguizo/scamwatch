import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnectionService } from '../@core/services/connection.service';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  public domain
  constructor(

    private http: HttpClient,
    public connection: ConnectionService,
    private authService: AuthService,


    ) {

      this.domain = this.connection.domain

    }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.connection.domain}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  // getFiles() {
  //   return this.http.get(`${this.connection.domain}/files`);
  // }
  getFiles(): Observable<any> {
    return this.http.get(`${this.connection.domain}/files`);
  }
}
