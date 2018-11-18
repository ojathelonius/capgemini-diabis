const messages = [
  {
    _id: 1,
    text: 'Hi Woopy, I was wondering if Fruity Loops were okay for breakfast.',
    createdAt: new Date(Date.UTC(2018, 10, 15, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Jonathan',
      avatar: require('../assets/images/empty_profile.png')
    }
  },
  {
    _id: 2,
    text: 'Hey Jonathan! From what I know, Fruity Loops contain 89g of carbs per serving. That is way too much! Try Albran Whole Wheat instead.',
    createdAt: new Date(Date.UTC(2018, 10, 15, 17, 21, 0)),
    user: {
      _id: 2,
      name: 'Woopy',
      avatar: require('../assets/logo_chat.png')
    }
  },
  {
    _id: 3,
    text: 'Woopy, I feel dizzy. What can I do??',
    createdAt: new Date(Date.UTC(2018, 10, 16, 14, 1, 0)),
    user: {
      _id: 1,
      name: 'Jonathan',
      avatar: require('../assets/images/empty_profile.png')
    }
  },
  {
    _id: 4,
    text: 'Did you check your blood sugar recently ?',
    createdAt: new Date(Date.UTC(2018, 10, 16, 14, 2, 0)),
    user: {
      _id: 2,
      name: 'Woopy',
      avatar: require('../assets/logo_chat.png')
    }
  }
];

export default messages;