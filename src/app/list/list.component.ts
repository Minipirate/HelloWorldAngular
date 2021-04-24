import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UserService } from '../services/user.service';
import * as _ from 'underscore'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersDeleteComponent } from '../users-delete/users-delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  source = "https://e7.pngegg.com/pngimages/426/179/png-clipart-ori-and-the-blind-forest-video-game-metroidvania-platform-game-others-blue-game.png";
  users: User[] = []
  pagination: any
  pages: any
  query: any = ''
  isActive: string = 'All'


  constructor(private service: UserService,
    protected modalService: NgbModal) { }

  //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
    this.pagination = { currentPage: 1, itemsPage: 6, totalPages: 0 }
    this.query = { status: '', q: '' }
    this.populateUsers()
  }

  populateUsers() {
    this.service.get(this.pagination.currentPage, this.pagination.itemsPage, _.values(this.query).join('')).subscribe(
      (response: any) => {
        this.pagination.totalPages = Math.ceil((response.headers.get('X-Total-Count') / this.pagination.itemsPage))
        this.pages = _.range(1, this.pagination.totalPages + 1);
        this.users = response.body;
        this.pagination.totalElement = response.headers.get('X-Total-Count');
      }
    );
  }

  paginate(page: number) {
    this.pagination.currentPage = page
    this.populateUsers()
  }

  search(event: any) {
    this.query.q = '&q=' + event.target.value
    this.pagination.currentPage = 1
    this.populateUsers()
  }

  showActive(showActive: string) {
    this.isActive = showActive
    this.populateUsers()
  }

  filterByStatus(status: any = undefined) {
    this.pagination.currentPage = 1
    if (status === undefined) {
      this.query.status = ''
    } else {
      this.query.status = '&isActive=' + status
    }
    this.populateUsers()
  }

  deleteUser(user: User) {
    let modal = this.modalService.open(UsersDeleteComponent);
    modal.componentInstance.user = user;
    modal.result.then((confirm) => {
     this.service.delete(user.id).subscribe(res => {
       this.populateUsers() //pour rafraîchir la page 
     })

    }, (dismiss) => {
      console.log('dismissed');
    })
  }
}
