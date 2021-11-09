import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @ViewChild('searchInput', { static: false }) searchInput!: NgForm;
  sort!: string;
  sortOptions!: string[][];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.sort = this.apiService.sort;
    this.sortOptions = this.apiService.sortOptions;
  }

  onSubmit(): void {
    this.router.navigate(['search', this.searchInput.value.q]);
  }

  updateSort() {
    this.apiService.sort = this.sort;
    this.apiService.getGameList(this.searchInput.value.q);
  }
}
