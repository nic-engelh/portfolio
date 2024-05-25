import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormCacheServiceService {

  private storageKey = 'contactFormData';

  constructor() { }

  saveFormData(data:any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getFormData(): any {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  clearFormData(): void {
    localStorage.removeItem(this.storageKey);
  }
}
