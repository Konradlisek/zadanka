const n = 124;

function goodNumber(num) {
  if ((n > 100) & (n < 200)) {
    console.log(`liczba ${n} znajduje się w przedziale od 100 do 200`);
  } else {
    console.log(`liczba ${n} nie znajduje się w przedziale od 100 do 200`);
  }
}

goodNumber(n);
