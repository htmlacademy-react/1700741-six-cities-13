export const Setting = {
  placesCount: 172,
  cityName: 'Paris',
  favoriteCount: 3,
}

export enum AppRoute {
  Main = '/main',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  FavoritesEmpty = '/favorites-empty',
  MainEmpty = '/main-empty',
  OfferNotLogged = '/offer-not-logged',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
}

export const SortingItems = {
  'Popular': true,
  'Price: low to high': false,
  'Price: high to low': false,
  'Top rated first': false,
}

export const PlaceCardsInfo = [

  { id: 1,
    premium: true,
    imgSrc: 'img/apartment-01.jpg',
    price: '&euro,120',
    rating: '80%',
    title: 'Beautiful &amp, luxurious apartment at great location',
    type: 'Apartment',
  },
  { id: 2,
    premium: false,
    imgSrc: 'img/room.jpg',
    price: '&euro,80',
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Private room',
  },
  { id: 3,
    premium: false,
    imgSrc: 'img/apartment-02.jpg',
    price: '&euro,132',
    rating: '80%',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  { id: 4,
    premium: true,
    imgSrc: 'img/apartment-03.jpg',
    price: '&euro,180',
    rating: '80%',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  { id: 5,
    premium: false,
    imgSrc: 'img/room.jpg',
    price: '&euro,80',
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Private room',
  },
]
