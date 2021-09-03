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
    return this._items.reduce(function (sum: number, item: Buyable): number {
      return sum + item.price;
    }, 0);
  }

  discountedPrice(discount: number): number {
    const initialPrice: number = this.price();
    return initialPrice - initialPrice * 0.01 * discount;
  }

  delete(id: number): void {
    this._items = this._items.filter((item: Buyable): boolean => item.id !== id);
  }
}
