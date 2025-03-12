import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from 'libs/contracts/books/create-book.dto';
import { UpdateBookDto } from 'libs/contracts/books/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOK_PATTERN } from 'libs/contracts/books/book.patterns';
import { BookDto } from 'libs/contracts/books/book.dto';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_CLIENT') private booksClient: ClientProxy) {}

  private mapBookDto(bookDto: CreateBookDto): BookDto {
    return {
      id: bookDto.id,
      title: bookDto.title,
    };
  }

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send(BOOK_PATTERN.CREATE, createBookDto);
  }

  findAll() {
    return this.booksClient.send(BOOK_PATTERN.FIND_ALL, {});
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} ${updateBookDto.id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
