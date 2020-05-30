import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';
@IonicPage()
@Component({
  selector: 'page-adicionar',
  templateUrl: 'adicionar.html',
})
export class AdicionarPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private noteService: NoteService) {
  }

 saveNote(value: { title: string}){
  this.noteService.saveNote(value);
 }

}
