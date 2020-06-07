import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionarPage } from '../adicionar/adicionar';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes : Promise<Note[]>;

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
