import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-user';

@Injectable({

	providedIn: 'root'
})
export class UserService {

	constructor() { }

	users = USERS;

	getUser() :User[] {

		return this.users;
	}

	addUser(newUser) {

		this.users.push(newUser);
	}

	deleteUser(index) {

		this.users.splice(index, 1);
	}

	updateUser(updateId, updateName, index) {

		this.users[index].id = updateId;
		this.users[index].name = updateName;
	}
}
