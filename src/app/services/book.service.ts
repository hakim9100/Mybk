import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
  } from '@angular/fire/firestore';
  import { Observable } from 'rxjs';
  import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {
    getBooks(): Observable<IBook[]> {
      const livresRef = collection(this.firestore, 'livres');
      return collectionData(livresRef, { idField: 'id' }) as Observable<IBook[]>;
      }
  

  constructor(private firestore: Firestore) { }

  addBook(book: IBook) {
    const livresRef = collection(this.firestore, 'livres');
    return addDoc(livresRef, book);
    }
    deleteBook(book: IBook) {
      const livreDocRef = doc(this.firestore, `livres/${book.id}`);
      return deleteDoc(livreDocRef);
      }
}
