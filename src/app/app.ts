import { Component, contentChild, signal } from "@angular/core";
//import { RouterOutlet } from "@angular/router";
import { Note } from "./models/note.model";
import { CommonModule } from "@angular/common";
import { Header } from "./header/header";
import  { Footer } from  "./footer/footer";
import  { FormsModule} from '@angular/forms';
import { NoteService } from "./services/note";


@Component({
  imports: [CommonModule, Header, Footer, FormsModule],
  selector: "app-root",
  styleUrl: "./app.css",
  templateUrl: "./app.html",
})
export class App {
  constructor(private noteService: NoteService) {}

  handleSubscribe(){
    console.log("all is working");
    alert("all is working");
  }

  showAlert(){
    alert("You clicked");
  }

  title = "Hello World on  my website"

  protected get notes(){
    return this.noteService.getNotes();
  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  })

  protected  addNote() {
    const noteData  = this.newNote();
    if(!noteData.title || !noteData.content) return ;

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content:  '',
    });
  }
}
