import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student/student.model';

export class InMemoryWebApiService implements InMemoryDbService {
	createDb(): {} {
		const students: Student[] = [
			{
				id: 1,
				name: 'sonal',
				date: '10/7/2014',
				mobileNumber: 8511456784,
				gender: 'female',
				dob: '14/07/2014',
				address: 'halar',
				city: 'valsad',
				pincode: 396001,
				state: 'Gujrat'
			},
			{
				id: 2,
				name: 'sonal',
				date: '10/7/2014',
				mobileNumber: 8511456784,
				gender: 'female',
				dob: '14/07/2014',
				address: 'halar',
				city: 'valsad',
				pincode: 396001,
				state: 'Gujrat'
			}
			,{
				id: 3,
				name: 'sonal',
				date: '10/7/2014',
				mobileNumber: 8511456784,
				gender: 'female',
				dob: '14/07/2014',
				address: 'halar',
				city: 'valsad',
				pincode: 396001,
				state: 'Gujrat'
			}
		];
		return { students };
	}
}
