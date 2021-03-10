const { verifyToken } = require('./../middlewares/authJwt');

describe('verifyToken', () => {
  it('should return an error if the token is not provided', () => {
    const req = {
      headers: {},
    };
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    verifyToken(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenLastCalledWith(403);
  });

  it('should return an error if the token is provided but it is not valid', () => {
    const req = {
      headers: { 'x-access-token': 'fake-token' },
    };
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    verifyToken(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenLastCalledWith(401);
  });
});
