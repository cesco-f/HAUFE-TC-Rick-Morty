const { verifyToken } = require('./../middlewares/authJwt');

describe('verifyToken', () => {
  it('should return an error if the token is not provided', () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    const req = {
      headers: {},
    };

    verifyToken(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenLastCalledWith(403);
  });

  it('should return an error if the token is provided but it is not valid', () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    const req = {
      headers: { 'x-access-token': 'fake-token' },
    };

    verifyToken(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenLastCalledWith(401);
  });
});
