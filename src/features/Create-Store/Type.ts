export interface Item {
  id: string;
  email: string;
  type: string;
}
export interface User {
  item: Item;
  href: string;
}

export interface StoreItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: string;
  user: User;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: any;
  query?: any;
}

export interface StoreData {
  item: StoreItem;
  links: Link[];
}
