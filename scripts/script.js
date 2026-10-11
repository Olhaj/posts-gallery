// ===== 1. ДАННЫЕ (в обфусцированном коде это была переменная data) =====
const data = {
  "10 компании": [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus vel praesentium molestias officiis repellat?",
    },
  ],
  "20 компании": [
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officia quibusdam, excepturi corrupti suscipit pariatur dolorem temporibus labore at. Quisquam?",
    },
  ],
  "30 компании": [
    {
      id: 3,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere perferendis, ipsa at quisquam libero, harum maxime, veniam adipisci provident consequuntur excepturi vel voluptas eum? Nisi distinctio debitis assumenda! Nemo.",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere perferendis, ipsa at quisquam libero, harum maxime, veniam adipisci provident consequuntur excepturi vel voluptas eum? Nisi distinctio debitis assumenda! Nemo.",
    },
  ],
  "40 компании": [
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, optio? Harum perspiciatis dignissimos delectus corrupti accusantium, similique fugiat illum vitae maxime? Expedita odit, quia, asperiores esse tempore similique autem omnis suscipit, reiciendis sed quidem explicabo fugit eveniet libero natus id.",
    },
  ],
  "50 компании": [
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid ea accusantium facere dolorum quaerat sit voluptatibus asperiores dolore atque adipisci reiciendis neque dicta nemo illo consequuntur eos a velit eius reprehenderit, necessitatibus sunt? Labore doloribus iusto, deserunt accusantium omnis ipsam tenetur eveniet aliquid maxime obcaecati dolorum libero. Velit incidunt temporibus, iusto necessitatibus consectetur rerum, dolor molestiae dolorem minima modi a. Facere, dolores eum! Sapiente rerum quo officiis blanditiis nihil. Dolore, quam! Id saepe et fuga libero hic quisquam tempora repellat nemo voluptatum explicabo, veniam, quaerat deserunt autem velit! Quaerat quasi optio suscipit repellendus quod non nihil quae error culpa.",
    },
  ],
  "60 компании": [
    {
      id: 6,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eum ducimus officiis sapiente at sed esse labore culpa voluptates minima repellat eligendi neque necessitatibus accusamus asperiores illum, nostrum autem aliquam incidunt. Mollitia et ut error nihil incidunt amet tenetur ipsa!",
    },
  ],
};

const images = [
  "https://i.pinimg.com/originals/60/bd/90/60bd90de6bb3f4091edf205bc4771cd3.png",
  "https://i.pinimg.com/736x/1c/4b/e2/1c4be22735caa3c4fd1ae03d167bc451.jpg",
  "https://i.pinimg.com/736x/e4/ec/e5/e4ece54b132e4e7448aeb35941a0e539.jpg",
  "https://i.pinimg.com/736x/a6/e0/07/a6e00790fcedacc97c384c0669b165ce.jpg",
  "https://i.pinimg.com/1200x/e6/72/01/e67201bdef0132e4d4e605862efe1686.jpg",
];

// ===== 2. СОЗДАЁМ DOM-ЭЛЕМЕНТЫ =====
const root_elem = document.getElementById("root");

// --- Табы ---
const posts_container = document.createElement("div");
const posts_triggers = document.createElement("div");
const posts_content = document.createElement("div");

posts_container.append(posts_triggers, posts_content);

posts_container.classList.add("posts_container");
posts_triggers.classList.add("trigger_container");
posts_content.classList.add("content");

// --- Галерея ---
const gallery_container = document.createElement("div");
const gallery_content = document.createElement("div");
const main_img = document.createElement("img");
const gallery_triggers = document.createElement("div");

gallery_content.append(main_img);
gallery_container.append(gallery_content, gallery_triggers);
root_elem.append(posts_container, gallery_container);

gallery_container.classList.add("gallery_container");
gallery_content.classList.add("content");
gallery_triggers.classList.add("trigger_container");

main_img.src = images[0]; // большая картинка по умолчанию — первая

// ===== 3. ЛОГИКА ТАБОВ =====
const tabNames = Object.keys(data);

function renderPosts(tab) {
  posts_content.innerHTML = ""; // очищаем старые посты
  data[tab].forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("post_item");
    div.innerHTML = `<p>${item.title}</p>`;
    posts_content.append(div);
  });
}

tabNames.forEach((tab, i) => {
  const btn = document.createElement("button");
  btn.textContent = tab;
  if (i === 0) btn.classList.add("active"); // первый таб активен по умолчанию
  btn.addEventListener("click", () => {
    // переключаем класс active на нажатую кнопку
    posts_triggers
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPosts(tab);
  });
  posts_triggers.append(btn);
});

renderPosts(tabNames[0]); // показываем первый таб сразу

// ===== 4. ЛОГИКА ГАЛЕРЕИ =====
images.forEach((src) => {
  const thumb = document.createElement("img");
  thumb.src = src.replace("400/500", "70/70"); // миниатюра
  thumb.addEventListener("click", () => {
    main_img.src = src; // клик по миниатюре меняет большую картинку
  });
  gallery_triggers.append(thumb);
});
