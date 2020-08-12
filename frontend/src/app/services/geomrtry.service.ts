import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://127.0.0.1:8000/geometry/';
@Injectable({
  providedIn: 'root',
})
export class GeomrtryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(baseURL);
  }
  getById(id) {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data) {
    return this.http.post(baseURL, data);
  }

  update(id, data) {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseURL}/${id}`);
  }
}
