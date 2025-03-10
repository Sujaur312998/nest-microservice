import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'libs/contracts/books/create-book.dto';
import { UpdateBookDto } from 'libs/contracts/books/update-book.dto';

@Injectable()
export class BooksService {
  private books=[
    {
      id:1,
      title:'Book 1',
      author:'Author 1',
      price:100
    },
    {
      id:2,
      title:'Book 2',
      author:'Author 2',
      price:200
    }
  ]
  create(createBookDto: CreateBookDto) {
    this.books.push(createBookDto)
    return  this.books
  }

  findAll() {
    return  this.books
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
