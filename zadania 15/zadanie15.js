function num(num1, num2) {
  const add = num1 + num2;
  const sub = num1 - num2;
  const multi = num1 * num2;

  if (add < 0 || sub < 0 || multi < 0) {
    console.log(`Wynik jest nieprawidłowy`);
  }

  console.log(`wynik z dodawania wynosi ${add}`);
  console.log(`wynik z odejmowania wynosi ${sub}`);
  console.log(`wynik z mnożenia wynosi ${multi}`);
}

num(22, 11);
