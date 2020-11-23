import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lead } from '../models/lead';
import { UserService } from '../user.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  constructor(
    // private userService: UserService,
    // private activatedRoute: ActivatedRoute
  ) { 

  }

  ngOnInit(): void { }
}
