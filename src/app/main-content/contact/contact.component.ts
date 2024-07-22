import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormCacheServiceService } from '../../service/form-cache/form-cache-service.service';
import { HttpClient } from '@angular/common/http';
import { TranslateService,TranslateModule} from '@ngx-translate/core';
import { ArrowComponent } from '../../shared/components/arrow/arrow.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, TranslateModule, ArrowComponent, NgxPageScrollModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http= inject(HttpClient);

  contactForm: FormGroup;

  post = {
    endPoint: 'https://www.niklas-engelhardt.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(public translate: TranslateService, private fb: FormBuilder, private formCacheService: FormCacheServiceService) {
    this.contactForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptPrivacyPolicy: [false, Validators.requiredTrue]
    });
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
    } else {
      // Handle form submission
      this.http.post(this.post.endPoint, this.post.body(this.contactForm.value))
      .subscribe({
        next: (response) => {
          this.contactForm.reset();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete')
      });
      console.log('Form submitted:', this.contactForm.value);
      this.formCacheService.saveFormData(this.contactForm.value);
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
