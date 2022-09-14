import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resetUpload1: boolean;
  resetUpload2: boolean;
  resetUpload3: boolean;

  afuConfig1: AngularFileUploaderConfig = {
    id: 112233,
    multiple: true,
    formatsAllowed: 'image/*',
    autoUpload: true,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
  };

  afuConfig2: AngularFileUploaderConfig = {
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    maxSize: 1,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
    formatsAllowed: '.jpg,.png',
    multiple: true,
  };

  afuConfig3: AngularFileUploaderConfig = {
    theme: 'dragNDrop',
    multiple: true,
    //hideProgressBar: true,
    //hideResetBtn: true,
    // hideSelectBtn: true,
    autoUpload: true,
    maxSize: 20,
     uploadAPI: {
       url: 'https://slack.com/api/files.upload',
       method:"POST",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
    // "Authorization" : `Bearer ${token}`//public API key
      },
      params: {
        'page': '1'
      },
      responseType: 'json',
      withCredentials: false,
  
    },
    formatsAllowed: '.jpg,.jpeg,.png,.txt',
    
  };
  
  clinical_text=''
  constructor(private http: HttpClient) {}
  input(event: { target: { elements: { value: any; }[]; }; }){
    var inpt= event.target.elements[0].value;
    if (inpt){
      console.log('input text',inpt)
      this.clinical_text = inpt.name;

            const formData = new FormData();

            formData.append("thumbnail", inpt);

            const sendtext$ = this.http.post("/api/thumbnail-upload", formData);

            sendtext$.subscribe();
    }
  }

  docUpload(event: any) {
    console.log('ApiResponse -> docUpload -> Event: ', event);
  }
  
  
 
  
 
  
  //fileName = '';
  //uploadProgress:number;
  //uploadSub: Subscription;

   //constructor(private http: HttpClient) {}

    //docUpload(event: { target: { files: File[]; }; }) {

        //const file:File = event.target.files[0];

        //if (file) {

            //this.fileName = file.name;

            //const formData = new FormData();

            //formData.append("thumbnail", file);

            //const upload$ = this.http.post("/api/thumbnail-upload", formData);
            //upload$.subscribe();
        //}
      //}
              //reportProgress: true,
              //observe: 'events'
         // })
          //.pipe(
            //finalize(() => this.reset())
        //);

        //this.uploadSub = upload$.subscribe(event => {
          //if (event.type == HttpEventType.UploadProgress) {
            //this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          //}
        //})
            
        //}
    //}
    //cancelUpload() {
      //this.uploadSub.unsubscribe();
      //this.reset();
    //}
    //reset() {
      //this.uploadProgress = null;
      //this.uploadSub = null;
    //}
}

