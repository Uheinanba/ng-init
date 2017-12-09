import { ValidatorFn, NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}
@Directive({
    selector: '[forbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})

export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenName: string;
    validate(control: AbstractControl): {[key: string]: any} {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                                : null;
    }
}


