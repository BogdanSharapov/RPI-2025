import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id': 'bbb06a0e-3f92-446d-9a68-cd4d5d38e2b0',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage': './public/img/offer-001(Paris).jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
          'latitude': 48.8686100000000004,
            'longitude': 2.342499,
            'zoom': 16
        },
        'isFavorite': true,
        'isPremium': false,
        'rating': 4.9
    },

    {
  'id': 'bali01',
  'title': 'Beachfront villa',
  'type': 'villa',
  'price': 450,
  'previewImage': './public/img/offer-003(Bali).jpg',
  'city': {
    'name': 'Bali',
    'location': {
      'latitude': -8.340539,
      'longitude': 115.091949,
      'zoom': 13
    }
  },
  'location': {
    'latitude': -8.409518,
    'longitude': 115.188919,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': true,
  'rating': 4.8
},
{
    'id': 'tokyo01',
    'title': 'Modern city apartment',
    'type': 'apartment',
    'price': 300,
    'previewImage': './public/img/offer-002(Tokyo).jpg',
    'city': {
      'name': 'Tokyo',
      'location': {
        'latitude': 35.682839,
        'longitude': 139.759455,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 35.689487,
      'longitude': 139.691711,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.7
  },
  {
    'id': 'tuscany01',
    'title': 'Countryside villa',
    'type': 'villa',
    'price': 500,
    'previewImage': './public/img/offer-004(Tuscany).jpg',
    'city': {
      'name': 'Tuscany',
      'location': {
        'latitude': 43.769562,
        'longitude': 11.255814,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 43.771051,
      'longitude': 11.248621,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5.0
  }
  
  


]