const { checkDuplicateUsername } = require('./../middlewares/verifySignUp');
const db = require('./../db');

describe('checkDuplicateUsername', () => {
  it('should return an error if the user already exists', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    const req = { body: { username: null } };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => true);
    await checkDuplicateUsername(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenLastCalledWith(400);
  });

  it('should call the spy function if the user does not exist already', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    const req = { body: { username: null } };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => false);
    await checkDuplicateUsername(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(0);
  });

  it('should return an error if an error is thrown while getting data from the database', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const spy = jest.fn();
    const req = { body: { username: null } };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => {
      throw new Error();
    });
    console.error = jest.fn(); // eslint-disable-line no-console
    await checkDuplicateUsername(req, res, spy);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(500);
  });
});
