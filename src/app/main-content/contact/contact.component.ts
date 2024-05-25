import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormCacheServiceService } from '../../service/form-cache/form-cache-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private formCacheService: FormCacheServiceService) {
    this.contactForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptPrivacyPolicy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadFormData();
    this.contactForm.valueChanges.subscribe(value => {
      this.formCacheService.saveFormData(value)
    })
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
    } else {
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
      this.formCacheService.clearFormData();
      this.contactForm.reset();
    }
  }

  get fullname() {
    return this.contactForm.get('fullname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get acceptPrivacyPolicy() {
    return this.contactForm.get('acceptPrivacyPolicy');
  }

  private loadFormData(): void {
    const cachedData = this.formCacheService.getFormData();
    if (cachedData) {
      this.contactForm.patchValue(cachedData);
    }
  }

}
