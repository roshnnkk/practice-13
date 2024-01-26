const menu = [
  {
    id: 1,
    title: "cheese cake",
    category: "cake",
    price: 12.25,
    img: "./assets/1.jpg",
    dec: "he spoor with mushroom. It is hot and bitter. You can really feel how GMP certified and how high in healthy fats it is.",
  },

  {
    id: 2,
    title: "ice caramel",
    category: "shakes",
    price: 14.25,
    img: "./assets/2.jpg",
    dec: "You can really feel how GMP certified and how high in healthy fats it is.",
  },
  {
    id: 3,
    title: "vanila cake",
    category: "cake",
    price: 17.25,
    img: "./assets/3.jpg",
    dec: "It smells like spoor with mushroom. It is hot and bitter. You can really feel how GMP certified and how high in healthy fats it is.",
  },
  {
    id: 4,
    title: "muffin",
    category: "cake",
    price: 19.25,
    img: "./assets/4.jpg",
    dec: "This blackened turnip ratatouille is wholly chewy with a velvety texture.and how high in healthy fats it is.",
  },
  {
    id: 5,
    title: "Spaghetti-tti",
    category: "lunch",
    price: 20.25,
    img: "./assets/5.jpg",
    dec: " It smells like spoor with mushroom. It is hot and bitter. You can really feel how GMP certified and how high in healthy fats it is.",
  },
  {
    id: 6,
    title: "The Mac Daddy",
    category: "lunch",
    price: 12.25,
    img: "./assets/6.jpg",
    dec: "This poached rutabaga quesadilla is a bit tough with a sticky texture.",
  },
  {
    id: 7,
    title: "chicken",
    category: "lunch",
    price: 30.25,
    img: "./assets/7.jpg",
    dec: "This fried leeks pastry is comparatively syrupy with a dry texture.  in healthy fats it is.",
  },
  {
    id: 8,
    title: "big burger",
    category: "lunch",
    price: 18.25,
    img: "./assets/8.jpg",
    dec: "This braised sweet potato salad is totally silky with a crunchy texture ",
  },
  {
    id: 9,
    title: "peperoni",
    category: "pizza",
    price: 18.5,
    img: "./assets/9.jpg",
    dec: "This blackened feijoa quesadilla is a touch burned with a stringy texture..",
  },
  {
    id: 10,
    title: "beef pizza",
    category: "pizza",
    price: 20.25,
    img: "./assets/10.jpg",
    dec: "This sauteed raspberries eggroll is scarcely crispy with a crispy texture..",
  },

  {
    id: 11,
    title: "chocolate shake",
    category: "shakes",
    price: 20.25,
    img: "./assets/11.jpg",
    dec: "This sauteed raspberries eggroll is scarcely crispy with a crispy texture..",
  },

  {
    id: 12,
    title: "baby shake",
    category: "shakes",
    price: 22.25,
    img: "./assets/12.jpg",
    dec: "This sauteed raspberries eggroll is scarcely crispy with a crispy texture..",
  },
];

function addMenuLists(itemList = []) {
  document.getElementById("menu-items").innerHTML = itemList
    .map(
      (food) =>
        `          <section class="item">
<img src="${food.img}" />
<div class="item-desc">
  <div class="top-item">
    <h3>${food.title}</h3>
    <p class="price"> $ ${food.price}</p>
  </div>
  <p class="food-more">
   ${food.dec}

  </p>
</div>
</section>`
    )
    .join(" ");
}

function setActiveClass(button) {
  if (button) {
    document.querySelectorAll("button").forEach((b) => {
      b.classList.remove("active-btn");
    });
    button.classList.add("active-btn");
  }
}

function addCategoryButtons() {
  let categoryLists = ["all"];
  menu.forEach(function (item) {
    if (item && item.category && !categoryLists.includes(item.category)) {
      categoryLists.push(item.category);
    }
  });

  const buttons = categoryLists.map(
    (cat) =>
      `<button class="button  ${
        cat === "all" ? "active-btn" : " "
      } "   category-id="${cat}"   type="button">${cat}</button>`
  );

  if (buttons.length > 0) {
    document.getElementById("menu-categories").innerHTML = buttons.join(" ");
  }

  document.querySelectorAll("button").forEach((item) => {
    const categoryType = item.getAttribute("category-id");

    item.addEventListener("click", function () {
      setActiveClass(item);
      item.classList.add("active-btn");
      if (categoryType === "all") {
        addMenuLists(menu);
        return;
      }

      const filteredList = menu.filter(
        (item) => item.category === categoryType
      );

      addMenuLists(filteredList);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  addCategoryButtons();
  addMenuLists(menu);
});
