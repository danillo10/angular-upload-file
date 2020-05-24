import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadosForm;
  images;
  multipleImages;

  dados = {
    nombre: "",
    foto_frontal: ""
  }

  constructor(private appService: AppServiceService,private formBuilder: FormBuilder){
    this.dadosForm = this.formBuilder.group({
      nombre: '',
      foto_frontal: ''
    })
  }
  
  create(){

    const formData = new FormData();
    
    for(let img of this.multipleImages){
      formData.append('files', img);
    }

    this.appService.create(formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )

  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

}
