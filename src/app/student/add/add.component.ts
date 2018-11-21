import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
//---------------------------------//
import { StudentService } from '../student.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
	public addForm: FormGroup;
	public submitted: boolean;
	constructor(private studentService: StudentService, private router: Router, private fb: FormBuilder) {}

	ngOnInit() {
		this.form();
	}
	public addStudent(id: any): void {
		this.studentService.addStudent(id).subscribe(() => {
			this.router.navigate([ '/student/view' ]);
		});
	}
	private form() {
		this.addForm = this.fb.group({
			name: [ '', [ Validators.required ] ],
			date: [ '', Validators.required ],
			mobileNumber: [ '', Validators.required ],
			gender: [ '', Validators.required ],
			dob: [ '', Validators.required ],
			address: [ '', Validators.required ],
			city: [ '', Validators.required ],
			pincode: [ '', Validators.required ],
			state: [ '', Validators.required ]
		});
	}

	/**
	 * validation
	 */

	hasFieldError(name: string, mobileNumber: number): boolean {
		if (name) {
			return (
				this.addForm.controls[name].invalid &&
				(this.addForm.controls[name].dirty || this.addForm.controls[name].touched)
			);
		} else {
			return (
				this.addForm.controls[mobileNumber].invalid &&
				(this.addForm.controls[mobileNumber].dirty || this.addForm.controls[mobileNumber].touched)
			);
		}
	}
}
