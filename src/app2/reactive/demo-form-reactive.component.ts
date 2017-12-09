import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Address, Hero, states } from './data-model';

@Component({
    selector: 'app-demo-form',
    templateUrl: './demo-form-reactive.component.html'
})

export class DemoFormReactiveComponent {
    heroForm: FormGroup;
    states = states;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required],
            address: this.fb.group(new Address()),
            power: '',
            sidekick: ''
        });
    }
}
