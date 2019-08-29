import { Injectable } from '@angular/core';
import { test1 } from './test1.model';
import { test2 } from './test2.model';


@Injectable()

export class TestingserviceService {

  constructor() { }

  currenttest1: test1 = {
    test1: ''
  }

  currenttest2 : test2 = {
    test2:' '
  }
  
}
