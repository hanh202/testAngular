import { Component, OnInit, Input } from '@angular/core';
import { SanPham } from '../sanpham';
@Component({
  selector: 'hlt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: SanPham[] = [
    {
      id: 1,
      name: 'a1',
      prime: 15.65,
      imgUrl: 'assets/product/img1.jpg',
      gender: 'female'
    },
    {
      id: 2,
      name: 'a2',
      prime: 15.65,
      imgUrl: 'assets/product/img2.jpg',
      gender: 'female'
    },
    {
      id: 3,
      name: 'a3',
      prime: 15.65,
      imgUrl: 'assets/product/img3.jpg',
      gender: 'female'
    },
    {
      id: 4,
      name: 'a4',
      prime: 15.65,
      imgUrl: 'assets/product/img4.jpg',
      gender: 'female'
    },
    {
      id: 5,
      name: 'a5',
      prime: 15.65,
      imgUrl: 'assets/product/img5.jpg',
      gender: 'male'
    },
    {
      id: 6,
      name: 'a6',
      prime: 15.65,
      imgUrl: 'assets/product/img6.jpg',
      gender: 'male'
    },
    {
      id: 7,
      name: 'a7',
      prime: 15.65,
      imgUrl: 'assets/product/img7.jpg',
      gender: 'male'
    },
    {
      id: 8,
      name: 'a8',
      prime: 15.65,
      imgUrl: 'assets/product/img8.jpg',
      gender: 'male'
    }
  ];
  activeClass = 'all';
  arr: SanPham[] = this.product;

  constructor() {}

  ngOnInit() {}
  getAll() {
    this.activeClass = 'all';
    this.arr = this.product;
  }
  filterMale(m) {
    this.activeClass = m;
    this.arr = this.product.filter(x => x.gender === m);
  }
  filterFemale(fm) {
    this.activeClass = fm;
    this.arr = this.product.filter(x => x.gender === fm);
  }
  // filter(n) {
  //   this.activeClass = n;
  //   return (this.arr = this.product.filter(x => x.gender === n));
  // }
}
