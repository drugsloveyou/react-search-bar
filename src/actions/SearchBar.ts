import { createAction } from 'redux-actions';

export const SearchListByNameAction: any = createAction(
  'SearchBar/SearchListByName',
  async (value: string) => {
    if (!value) {
      return [];
    }
    const data = [
      {
        id: 1,
        type: 'Vacuum',
        items: [
          {
            id: 1001,
            name: 'V11',
            price: 456.58,
            stock: 1,
            type: 'Vacuum',
          },
          {
            id: 1002,
            name: 'V2212',
            price: 84.32,
            stock: 1,
            type: 'Vacuum',
          },
        ],
      },
      {
        id: 2,
        type: 'Hair Dryer',
        items: [
          {
            id: 2001,
            name: 'Jone 1',
            price: 999.99,
            stock: 0,
            type: 'Vacuum',
          },
          {
            id: 2002,
            name: 'SuperSonit 1',
            price: 123.99,
            stock: 1,
            type: 'Hair Dryer',
          },
        ],
      },
    ];
    return data.filter((item) => {
      item.items = item.items.filter(
        (product) => product.name.indexOf(value) !== -1
      );
      return item.items.length;
    });
  }
);
