import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuestionComponent),
      multi: true
    }
  ]
})
export class QuestionComponent implements ControlValueAccessor  {
    @Input() question;
    @Input() formControl;
    // @Input() formModel;
    value: any;

    constructor() { }

    ngOnInit(): void {
    }

    onChange = (value: any) => {};
    onTouched = () => { };

    // get onBlur() {
    //     return;
    //     // return this.formModel.get('onBlur');
    // }

    writeValue(value: any)
    {
        // console.log('writeValue - VALUE:');
        // console.log(this.question.key);
        // console.log(value);
        // console.log('-----------------------');
        this.value = value;
    }

    // propagateChange = (_: any) => {
    //     console.log('propagateChange');
    // };

    registerOnChange(fn: any)
    {
        // console.log('registerOnChange');
        // console.log(fn);
        // console.log('-----------------------');
        // this.propagateChange = fn;
        this.onChange = fn;
    }

    registerOnTouched(fn: any)
    {
        // console.log('registerOnTouched');
        // console.log(this.question.key);
        // console.log('-----------------------');
        // this.propagateChange(this.question);
        this.onTouched = fn;
    }

    updateValue(event: Event) {
        let value = (<HTMLInputElement>event.target).value;
        console.log(value);
        this.value = value; // html
        this.onChange(value); // уведомить Forms API
        this.onTouched();
        console.log('valid: ' + this.formControl.valid);
    }

    get isError()
    {
        if(this.formControl.dirty || this.formControl.touched)
        {
            return !this.formControl.valid;
        }
        else
        {
            return false;
        }
    }

    get isOK()
    {
        if(this.formControl.dirty || this.formControl.touched)
        {
            return this.formControl.valid;
        }
        else
        {
            return false;
        }
    }
}
