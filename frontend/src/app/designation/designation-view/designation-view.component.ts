import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DesignationService} from "../common/designation.service";
import {DesignationOutDto} from "../common/designation.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-designation-view',
  templateUrl: './designation-view.component.html',
  styleUrls: ['./designation-view.component.css']
})
export class DesignationViewComponent implements OnInit {

  designationOutDtos: DesignationOutDto[] = [];
  @Input('designationOutDto') designationOutDto: DesignationOutDto = new DesignationOutDto();
  @Output('designationEvent') designationEvent = new EventEmitter<DesignationOutDto>();

  constructor(private designationService: DesignationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllDesignations()
  }

  getAllDesignations() {
    this.designationService.findAll().subscribe(designationOutDtos => {
      this.designationOutDtos = designationOutDtos;
    });
  }

  callParent() {
    this.designationEvent.emit();
  }

  navigateToDesignationUpdate(designationOutDto: DesignationOutDto) {
    this.router.navigate(['/designation-update', designationOutDto.id]);
  }

  designationDelete(designationOutDto: DesignationOutDto) {
    if (designationOutDto.id) {
      this.designationService.delete(designationOutDto.id).subscribe(designationOutDtos => {
        this.callParent();
      })
    }
  }
}
