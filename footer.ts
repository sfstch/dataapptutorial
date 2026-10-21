import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  @Output() subscribeClicked =  new EventEmitter<void>();
  onSubscribe() {
    this.subscribeClicked.emit();
  }

  username=""
}
