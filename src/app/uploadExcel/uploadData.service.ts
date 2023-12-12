// excel-data.service.ts
import { Injectable } from '@angular/core';

const STORAGE_KEY_DATA = 'excelData';
const STORAGE_KEY_HEADER = 'excelHeaders';

@Injectable({
  providedIn: 'root',
})
export class UploadDataService {
  private excelData: any[] = [];
  private excelHeader: any[] = [];

  constructor() {
    // Load data from local storage when the service is created
    const storedData = localStorage.getItem(STORAGE_KEY_DATA);
    const storeHeader = localStorage.getItem(STORAGE_KEY_HEADER);

    this.excelData = storedData ? JSON.parse(storedData) : [];
    this.excelHeader = storeHeader ? JSON.parse(storeHeader) :[];
  }

  uploadData(data: any[], header: any[]): void {
    // Save the uploaded data
    this.excelData = data;
    this.excelHeader = header;

    // Save data to local storage
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
    localStorage.setItem(STORAGE_KEY_HEADER, JSON.stringify(header));
  }

  getData(): any[] {
    // Return the current data
    return this.excelData;
  }

  getHeader(): any[] {
    // Return the current data
    return this.excelHeader;
  }
}
