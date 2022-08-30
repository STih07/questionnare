import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-options',
  templateUrl: './create-options.component.html',
  styleUrls: ['./create-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOptionsComponent implements OnInit, OnDestroy {


  @Input() options!: string[];
  @Input() form!: FormGroup;


  get optionsControl() {
    return this.form.get('options') as FormArray;
  }

  onAddOption({ value }: { value: string }) {
    this.optionsControl.push(new FormControl(value));
  }

  onRemoveOption({ value }: { value: string }) {
    const index = this.optionsControl.controls.findIndex(control => control.value === value);
    this.optionsControl.removeAt(index);
  }

  ngOnInit(): void {
    const controls = this.options?.map(option => new FormControl(option)) ?? [];
    this.form.addControl('options', new FormArray(controls, [Validators.required, Validators.minLength(2)]));
  }

  ngOnDestroy() {
    this.form.removeControl('options');
  }
}
