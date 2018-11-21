import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//-------------------------------------//
import { Student } from './student.model';

@Injectable()
export class StudentService {
readonly url='api/students'

	constructor(private http: HttpClient) {}

	public getStudents(): Observable<Student[]> {
    console.log("befor");
    
		return this.http.get<Student[]>(this.url);
	}
	public getStudent(id): Observable<Student> {
		const url = this.url + '/' + id;
		return this.http.get<Student>(url);
	}
	public addStudent(student: Student): Observable<Student> {
		return this.http.post<Student>(this.url, student);
	}
	public updateStudent(student: Student): Observable<Student> {
		return this.http.put<Student>(this.url, student);
	}

	public deleteStudent(id: number): Observable<Student> {
		const url = this.url + '/' + id;
		return this.http.delete<Student>(url);
	}
}
