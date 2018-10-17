import identity from 'lodash/fp/identity';

describe('steam client', () => {
  const mockedClient = { put: jest.fn(), post: jest.fn() };

  const mockedAxios = {
    create: jest.fn(() => mockedClient),
  };

  const mockedAddErrorCatching = jest.fn(identity);

  const mockedApi = 'https://www.google.com';

  jest.mock('axios', () => mockedAxios);
  jest.mock('config', () => ({ steamApi: mockedApi }));
  jest.mock('../interceptors', () => ({
    addErrorCatching: mockedAddErrorCatching,
  }));

  let steamClient;
  beforeEach(async () => {
    jest.resetModules();
    mockedAxios.create.mockClear();
    mockedAddErrorCatching.mockClear();
    steamClient = await import('../steamClient');
  });

  test('should call axios create with api url', () => {
    expect(mockedAxios.create).toBeCalledWith({ baseURL: `${mockedApi}` });
  });

  test('should call addErrorCatching interceptor', () => {
    expect(mockedAddErrorCatching).toBeCalled();
  });

  test('should be the mockedClient', () => {
    expect(steamClient.default).toEqual(mockedClient);
  });
});
