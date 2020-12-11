import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              WorkoutTracker: 'workout',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'progress',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
