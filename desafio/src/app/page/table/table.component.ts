import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countries.interface';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public countries: Countries[] = [];

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.requestService.getCountry().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
