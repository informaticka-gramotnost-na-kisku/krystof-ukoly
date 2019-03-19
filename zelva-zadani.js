for (i = 0; i < 40; i++) {
  t.repeat(i, () => {
    t.fd(i).rt(360 / i)
  });
  t.repeat(i, () => {
    t.fd(i).lt(360 / i)
  });
};