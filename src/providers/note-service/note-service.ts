import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable()
export class NoteService{

  constructor(public http: HttpClient) {
    console.log('Hello NoteServiceProvider Provider');
  }

}
