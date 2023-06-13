import {Component, OnInit} from '@angular/core';
import {DesignationOutDto} from "./common/designation.model";
import {DesignationService} from "./common/designation.service";

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designationOutDtos: DesignationOutDto[] = [];

  constructor(private designationService: DesignationService) {
  }

  ngOnInit(): void {
    this.getAllDesignations()
  }

  getAllDesignations() {
    this.designationService.findAll().subscribe(designationOutDtos => {
      this.designationOutDtos = designationOutDtos;
    });
  }
}
