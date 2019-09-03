import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = 'http://localhost:8080/documents';

  constructor(private http: HttpClient) { }

  
  getAllDocuments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getDocument(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDocument(document: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, document);
  }

  updateDocument(document: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, document);
  }

  deleteDocument(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}