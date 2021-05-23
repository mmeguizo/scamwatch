import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConnectionService } from '../@core/services/connection.service';


@Injectable()
export class SearchService {

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
   // this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new HttpHeaders({
      'Content-Type': 'application/json', // Format set to JSON
      //remove token not authenticated routes create customer header later
      //'authorization': this.authService.authToken // Attach token
    });
  }



  // Function to get all blogs from the database
  getAllInfo() {
   this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + '/search/getAllInfo', { headers: this.options });
  }


//   findUser(data) {

//     //if not authenticated route remove headers
//    //this.createAuthenticationHeaders(); // Create headers
//     return this.http.get(this.domain + '/search/findUser/' +  data.selector + '/' + data.input );
//     // return this.http.get(this.domain + '/search/findUser', { params : data} );

//     /*

//       GET /search?option=some%20data&keyword=some%20data
// Then in your server, you could use:

// req.query.option
// req.query.keyword

//     */



//   }
  searchInformation(info) {

    // return this.http.post('http://localhost:3000/search/findUser' , info, { headers:this.options });
    return this.http.post(this.domain + '/search/findUser', info, { headers: this.options });

  }






  addUser(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + '/search/addInfo', data, { headers: this.options });
  }
  changeStatus(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/search/changeStatus', data, { headers: this.options });
  }
  updateUser(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/search/updateInfo', data, { headers: this.options });
  }
  deleteUser(data) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + '/search/deleteInfo', data, { headers: this.options });
  }


}
