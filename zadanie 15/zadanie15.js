const btn1 = document.querySelector("#add");
const btn2 = document.querySelector("#remove");
const p = document.querySelector("#text");

btn1.addEventListener("click", () => {
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et ut doloremque provident quidem, officiis, mollitia asperiores pariatur in nemo numquam vero. Officia aut adipisci nam quae quia. Mollitia hic praesentium quia nulla eius alias! Fugit nostrum ipsam optio odio distinctio itaque, nisi voluptatibus labore debitis fuga esse quidem. Dolorum rerum ad assumenda expedita dicta, omnis aspernatur dolor numquam, distinctio ipsam eveniet, eum dolores dignissimos odio incidunt reiciendis? Id reprehenderit fugiat qui at a, porro nisi nam iusto pariatur distinctio, dolorem assumenda illo? Magni vero, corrupti voluptatem mollitia fugiat eveniet tempore delectus sapiente eaque quis, vitae similique impedit, neque odit. Molestias veniam ratione quam at! Fugit perferendis, eaque ducimus magni quaerat harum doloremque ipsa dolorum voluptatibus quae itaque cupiditate? Provident unde a quod ipsa inventore ex, eveniet itaque suscipit necessitatibus dolores praesentium assumenda nostrum, ratione omnis architecto quasi autem perspiciatis ipsam maxime odio ut officia! Et numquam quaerat dolorem excepturi?";
});

btn2.addEventListener("click", () => {
  p.textContent = "";
});
