import { Offers } from '../types';

export const offers: Offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
    previewImage: 'img/apartment-02.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '5',
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
];
