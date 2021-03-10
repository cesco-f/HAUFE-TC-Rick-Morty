const { register, login } = require('./../controllers/auth.controller');
const db = require('./../db');
const bcrypt = require('bcryptjs');

describe('register', () => {
  it('should register the user if username and password are provided', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const req = {
      body: { username: 'test', password: 'test' },
    };
    db.User = jest.fn();
    db.User.mockImplementation(() => {
      return {
        save: jest.fn().mockImplementation(() => {
          return {};
        }),
      };
    });

    await register(req, res);
    expect(db.User).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it('should not register the user if an error is thrown while getting data from the database', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const req = {
      body: { username: 'test', password: 'test' },
    };
    db.User = jest.fn();
    db.User.mockImplementation(() => {
      throw new Error();
    });
    console.error = jest.fn(); // eslint-disable-line no-console

    await register(req, res);
    expect(db.User).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});

describe('login', () => {
  it('should return 404 if the user is not found', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const req = {
      body: { username: 'test', password: 'test' },
    };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => {
      return false;
    });

    await login(req, res);
    expect(db.User.findOne).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(404);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it('should return 401 if the password is not valid', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const req = {
      body: { username: 'test', password: 'test' },
    };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => {
      return true;
    });

    bcrypt.compareSync = jest.fn();
    bcrypt.compareSync.mockImplementation(() => {
      return false;
    });

    await login(req, res);
    expect(bcrypt.compareSync).toHaveBeenCalledTimes(1);
    expect(db.User.findOne).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(401);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it('should send the token if the user exists and the password is valid', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const req = {
      body: { username: 'test', password: 'test' },
    };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => {
      return true;
    });

    bcrypt.compareSync = jest.fn();
    bcrypt.compareSync.mockImplementation(() => {
      return true;
    });

    await login(req, res);
    expect(bcrypt.compareSync).toHaveBeenCalledTimes(1);
    expect(db.User.findOne).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it('should return an error if an error is thrown while getting data from the database', async () => {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
    };
    const req = {
      body: { username: 'test', password: 'test' },
    };
    db.User.findOne = jest.fn();
    db.User.findOne.mockImplementation(() => {
      throw new Error();
    });

    await login(req, res);
    expect(db.User.findOne).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});
