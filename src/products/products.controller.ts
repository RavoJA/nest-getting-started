import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';


export interface ProductDto {
  id : number
  name: string
}

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id') 
  getProduct(@Param() params) {
    console.log('get a single product', params.id);
    return this.productsService.getProducts().filter(p => p.id == params.id);
  }

  @Post()
  createProduct(@Body() product: ProductDto) {
    console.log('create product', product);
    this.productsService.createProduct(product);
  }

  @Put()
  updateProduct(@Body() product: ProductDto) {
    console.log('update product', product);
    this.productsService.updateProduct(product);
  }

  @Delete()
  deleteProduct(@Body() product: ProductDto) {
    console.log('delete product', product.id);
    this.productsService.deleteProduct(product.id);
  } 
}
