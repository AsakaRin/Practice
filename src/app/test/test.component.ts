import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-user';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {

	constructor(private userService: UserService) { }

	ngOnInit() {
	}

	users = this.userService.getUser();

	AddUser(newId, newName) {

		const newUser: User = {

			id: newId,
			name: newName
		};

		this.userService.addUser(newUser);
	}

	DeleteUser(index) {

		this.userService.deleteUser(index);
	}

}
