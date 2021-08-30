import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  price(): number {
    let amount: number = 0;

    this._items.forEach(function (item: Buyable): void {
      amount += item.price;
    });

    return amount;
  }

  discountedPrice(discount: number): number {
    const initialPrice: number = this.price();
    const price: number = initialPrice - initialPrice * 0.01 * discount;

    return price;
  }

  delete(id: number): void {
    const index: number = this._items.findIndex((item: Buyable): boolean => item.id === id);

    this._items.splice(index, 1);
  }
}
