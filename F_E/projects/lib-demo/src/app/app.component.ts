import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resetUpload1: boolean;
  resetUpload2: boolean;
  resetUpload3: boolean;

  
  afuConfig3: AngularFileUploaderConfig = {
    theme: 'dragNDrop',
    // hideProgressBar: true,
    hideResetBtn: false,
    // hideSelectBtn: true,
     autoUpload: true,
    
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
      method: "POST",
    headers: {
	"Content-Type" : "text/plain;charset=UTF-8",
    },
    params: {
	'page' : '1',
   },
   responseType: 'json',
   withCredentials: false,
},
   
   multiple: true,
  };

  constructor() {}

  docUpload(event) {
    console.log('ApiResponse -> docUpload -> Event: ', event);
  }
}
