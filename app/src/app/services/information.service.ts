import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectionService } from '../@core/services/connection.service';



@Injectable()
export class InformationsService {

  options;
  //public domain = "http://localhost:3000";
  public domain
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private connection: ConnectionService,
  ) {

    this.domain = this.connection.domain

  }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new HttpHeaders({
      'Content-Type': 'application/json', // Format set to JSON
      'authorization': this.authService.authToken // Attach token
    });
  }



  // Function to get all blogs from the database
  getAllInformation() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/information/getAllInformations', { headers: this.options });
  }

  addInformation(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/information/addInformations', data, { headers: this.options });
  }
  changeInformationStatus(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/information/changeInformationStatuses', data, { headers: this.options });
  }
  updateInformation(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/information/updateInformations', data, { headers: this.options });
  }
  deleteInformation(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/information/deleteInformations', data, { headers: this.options });
  }


}
