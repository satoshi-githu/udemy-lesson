const Product = require('./model/product')
class FakeDB {
  constructor() {
    this.products = [
      {
        coverImage: './assets/image/phone-cover.jpg',
        id: 0,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heding1: 'サンプルテキスト1',
        heding2: 'サンプルテキスト2',
        heding3: 'サンプルテキスト3',
        hedingtext1: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext2: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/image/phone-cover.jpg',
        id: 1,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heding1: 'サンプルテキスト1',
        heding2: 'サンプルテキスト2',
        heding3: 'サンプルテキスト3',
        hedingtext1: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext2: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'

      },
      {
        coverImage: './assets/image/phone-cover.jpg',
        id: 2,
        name: 'Phone Standard',
        price: 299,
        description: '',
        heding1: 'サンプルテキスト1',
        heding2: 'サンプルテキスト2',
        heding3: 'サンプルテキスト3',hedingtext1: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext2: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'

      },
      {
        coverImage: './assets/image/phone-cover.jpg',
        id: 3,
        name: 'Phone Special',
        price: 999,
        description: '',
        heding1: 'サンプルテキスト1',
        heding2: 'サンプルテキスト2',
        heding3: 'サンプルテキスト3',
        hedingtext1: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext2: 'サンプルテキスト サンサンプルテキストプルテキスト サンプルテキスト',
        hedingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      }
    ]
  }
async initDb() {
  await this.cleanDb();
  this.pushProductsToDb();
}

async  cleanDb() {
   await Product.deleteMany({});
  }

  pushProductsToDb () {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save();
      }
    )
  }

  seeDb() {
    this.pushProductsToDb();
  }
}
 module.exports = FakeDB;
