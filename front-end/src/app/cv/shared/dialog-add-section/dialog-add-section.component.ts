import {Component, Inject, OnInit} from '@angular/core';
import {DialogPosition, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobProfileService} from "../job-profile.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../users/shared/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-dialog-add-section',
  templateUrl: './dialog-add-section.component.html',
  styleUrls: ['./dialog-add-section.component.scss']
})
export class DialogAddSectionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAddSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobProfileService: JobProfileService,
    private userService: UserService,
    private route : ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  currentJobProfileId!: string;
  formExperience!: FormGroup;
  formCompetence!: FormGroup;
  formFormation!: FormGroup;
  accroche!: FormControl;

  ngOnInit(): void {
    this.route.url.subscribe(
      v => {
        console.log(v)
        this.currentJobProfileId = v[v.length - 1].path
      }
    )
    this.formExperience = this.fb.group({
      organisation:[''],
      function:[''],
      startDate:[''],
      endDate:[''],
      description:[''],
    });

    this.formFormation = this.fb.group({
      organisation:[''],
      function:[''],
      startDate:[''],
      endDate:[''],
      description:[''],
    });
  }

  onSaveData() {

    switch (this.data.section) {
      case 'experience': {
        // this.jobProfileService.addExperience(jobProfileId)
      }
    }

  }
}
