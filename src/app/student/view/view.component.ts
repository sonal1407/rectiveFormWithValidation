import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

import { Router } from '@angular/router';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit, OnDestroy {
	public students: Student[];

	constructor(private studentService: StudentService, private router: Router) {
		this.students = [];
	}

	ngOnInit() {
		this.getStudents();
	}
	public getStudents(): void {
		this.studentService.getStudents().subscribe((student: any) => {
			this.students = <Student[]>student.data;
		});
	}
	public deleteStudent(id: number): void {
		this.studentService.deleteStudent(id).subscribe();
	}
	onEdit() {
		this.router.navigate([ '/student/edit' ]);
	}
	public ondDelete(id: number) {
		this.studentService.deleteStudent(id).subscribe();
		this.getStudents();
	}

	ngOnDestroy() {}
}
