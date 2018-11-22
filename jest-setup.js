jest.mock('react-native-languages', () => ({
    RNLanguages: {
        language: 'en',
        languages: ['en'],
    },
}));

jest.mock('react-native-gesture-handler', () => {});

jest.mock('react-navigation-stack', () => {});
jest.mock('react-navigation', () => {});
