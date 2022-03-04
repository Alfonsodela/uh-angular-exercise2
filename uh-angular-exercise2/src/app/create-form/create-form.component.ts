import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  public createProductForm?: FormGroup;
  public savedProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl(''),
      stars: new FormControl(''),
    });
  }

  public saveProduct(event: Event) {
    event.preventDefault();
    if (this.createProductForm?.valid) {
      // let productRequest;
      // if (this.product?.id) {
        // productRequest = this
        console.log(this.createProductForm.value);
      }
    }
    
  }


