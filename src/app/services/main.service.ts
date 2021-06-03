import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  requests: any[];

  API_URI = `http://hp-api.herokuapp.com/api/characters`;

  constructor(private http: HttpClient) {
    this.requests = [];
  }

  /* Metodo el cual obtiene todos los estudiantes a traves de la API */
  getStudents() {
    return this.http.get(`${this.API_URI}/students`);
  }

  /* Metodo el cual obtiene todos los profesores a traves de la API */
  getStaffs() {
    return this.http.get(`${this.API_URI}/staff`);
  }

  /* Metodo el cual obtiene todos los personajes de las casas de estudios de Howarts a traves de la API */
  getCharacters(id: string) {
    return this.http.get(`${this.API_URI}/house/${id}`);
  }

  /* Metodo pata listar las solicitudes de nuevos estudiantes, almacenadas en localStorage */
  getRequest() {
    if (localStorage.getItem('requests') == null) {
      return this.requests;
    } else {
      this.requests = JSON.parse(localStorage.getItem('requests') || '{}');
      return this.requests;
    }
  }

  /* Metodos para crear una solicitud de nuevo estudiante y guardar en localStorage */
  addRequest(data: any) {
    this.requests.push(data);
    let reqStudent: any[] = [];
    if (localStorage.getItem('requests') == null) {
      reqStudent.push(data);
      localStorage.setItem('requests', JSON.stringify(reqStudent));
    } else {
      reqStudent = JSON.parse(localStorage.getItem('requests') || '{}');
      reqStudent.push(data);
      localStorage.setItem('requests', JSON.stringify(reqStudent));
    }
  }

  /* Metodo para eliminar la solicitud del estudiante de localStorage */
  deleteRequest(data: any) {
    for (let i = 0; i < this.requests.length; i++) {
      if (data == this.requests[i]) {
        this.requests.splice(i, 1);
        localStorage.setItem('requests', JSON.stringify(this.requests));
      }
    }
  }
}
