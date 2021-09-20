import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface FormDefinition {
    'field_list': {}
};

@Component({
    selector: 'form-component',
    templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {

    formDefinition: FormDefinition = {'field_list': {}};
    formModel: FormGroup;

    ngOnInit() {
        this.formDefinition.field_list = {
            'userName': 'string',
            'userLogin': 'string',
            'userPassword': 'password'
        };

        this.formModel = new FormGroup({
            userName: new FormControl(null, Validators.required),
            userLogin: new FormControl(null, Validators.required),
            userPassword: new FormControl(null, Validators.required)
        },
        { updateOn: 'change' }
        );
    }
  
    getFormControl(fieldName: string): FormControl
    {
        return this.formModel.get(fieldName) as FormControl;
    }

}