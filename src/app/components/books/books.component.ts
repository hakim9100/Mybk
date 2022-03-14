import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBookComponent } from '../../modal/edit-book/edit-book.component';
import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];
  constructor(private bookService: BookService,) { }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res: IBook[]) => {
      this.books = res;
    })
  }
  deleteBook(book: IBook) {
    if (confirm('Etes-vous de supprimer ce livre ?') == true) {
      this.bookService.deleteBook(book).then(() =>
        console.log('SUppression effectuée'));
    }
  }
  editModal(book: IBook) {
    const modalRef = this.modal.open(EditBookComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',

    });
    modalRef.componentInstance.id = book.id;
  }

}
