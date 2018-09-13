import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'hlt-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formValue: FormGroup;
  submitted = false;
  imageUrls = [
    {
      name: 'f-crossed-design-dress',
      link: 'assets/product/img1.jpg'
    },
    {
      name: 'f-fitted-textured-dress',
      link: 'assets/product/img2.jpg'
    },
    {
      name: 'f-neoprene-effect-dress',
      link: 'assets/product/img3.jpg'
    },
    {
      name: 'f-printed-ruffle-dress',
      link: 'assets/product/img4.jpg'
    },
    {
      name: 'm-message-cotton-t-shirt',
      link: 'assets/product/img5.jpg'
    },
    {
      name: 'm-regular-fit-chest-pocket-shirt',
      link: 'assets/product/img6.jpg'
    },
    {
      name: 'm-regular-fit-printed-cotton-shirt',
      link: 'assets/product/img7.jpg'
    },
    {
      name: 'm-striped-cotton-t-shirt',
      link: 'assets/product/img8.jpg'
    }
  ];
  category = ['male', 'shirt', 'female', 'dress'];
  constructor() {}

  ngOnInit() {
    this.formValue = new FormGroup({
      txtName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      txtPrice: new FormControl('', [Validators.required]),
      sltImage: new FormControl('', [Validators.required]),
      sltCategory: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    this.submitted = true;
  }
}
