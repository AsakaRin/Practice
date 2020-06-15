import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	constructor( private route: ActivatedRoute, private userService: UserService ) { }

	users = this.userService.getUser();

	index: any;
	editUser: any;

	ngOnInit() {

		this.route.paramMap.subscribe(params => {

		 	console.log(this.users);
			this.index = params.get('index');
		});

		this.editUser = this.users[this.index];
	}

	UpdateUser(updateId, updateName, index) {

		this.userService.updateUser(updateId, updateName, index);
	}

}
