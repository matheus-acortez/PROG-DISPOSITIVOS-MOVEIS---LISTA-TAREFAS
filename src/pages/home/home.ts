import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionarPage } from '../adicionar/adicionar';
import { NoteService } from '../../providers/note-service/note-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: {title: string} [] = [];
  constructor(public navCtrl: NavController, private noteService: NoteService) {
    
  }

    ionViewWillEnter(){
      this.notes = this.getAllNotes(); 
    }

    addNote(){
      this.navCtrl.push(AdicionarPage);
    }

    getAllNotes(){
      return this.noteService.getAllNotes();
    }
}
