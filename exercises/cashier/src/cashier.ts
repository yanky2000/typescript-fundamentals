interface CartItem {name: string, price: number, qty: number};

interface CartAPI {
  length: number;
  total: number;
  add(name: string, price: number, qty?: number): CartAPI;
  addItem(item: CartItem): CartAPI;
}

export function cashier(): CartAPI {
  let items: CartItem[] = [];
  return {
    get length(): number {
      return items.reduce((lengthSoFar, item) => {
        return lengthSoFar + item.qty;
      }, 0);
    },
    get total(): number {
      return items.reduce((lengthSoFar, item) => {
        return lengthSoFar + (item.price * item.qty);
      }, 0);
    },
    add(name: string, price: number, qty: number = 1): CartAPI {
      items.push({ name, price, qty });
      return this;
    },
    addItem(item: CartItem): CartAPI {
      items.push(item);
      return this;
    }
  };
}




// function getRemoteData(url: string, method: 'get'): Promise<Response>;
// function getRemoteData(url: string, method: 'post', csrf: string): Promise<Response>;

// function getRemoteData(url: string, method: 'get' | 'post', csrf?: string): Promise<Response> {
//   if (method === 'get') {
//     return fetch (url);
//   } else {
//     let token = csrf as string; // signature #2 csrf is non-optional
//     return fetch(url, {
//       headers: {
//         token
//       }
//     })
//   }
// }




// getRemoteData('', 'get');