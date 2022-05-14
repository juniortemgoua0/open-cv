import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
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
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  currentJobProfileId!: string;
  formExperience!: FormGroup;
  formCompetence!: FormGroup;
  formFormation!: FormGroup;
  accroche!: FormControl;

  ngOnInit(): void {

    this.formExperience = this.fb.group({
      organisation: [''],
      function: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
    });

    this.formFormation = this.fb.group({
      school: [''],
      diploma: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
    });

    this.formCompetence = this.fb.group({
      name: [''],
      level: [''],
    });
  }

  onSaveData() {
    switch (this.data.section) {
      case 'experience':
        this.jobProfileService.addExperience(this.data.currentJobProfileId, this.formExperience.value);
        this.dialogRef.close()
        break
      case 'formation' :
        this.jobProfileService.addFormation(this.data.currentJobProfileId , this.formFormation.value);
        this.dialogRef.close()
        break;
      case 'competence':
        this.jobProfileService.addCompetence(this.data.currentJobProfileId , this.formCompetence.value);
        this.dialogRef.close();
        break;
      case 'accroche' :
        this.jobProfileService.addAccroche(this.data.currentJobProfileId , this.accroche.value)
        break;
    }

  }
}
