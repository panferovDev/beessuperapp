export const userSession = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

export const pathMiddleware = (req, res, next) => {
  res.locals.path = req.url;
  next();
};

export const isAuthApi = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.sendStatus(401);
};

export const isAuth = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/auth/signin');
};
