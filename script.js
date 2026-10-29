const foods = [
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นผัดไทยเหนียวนุ่มคลุกซอสเปรี้ยวหวานมัน โรยกุ้งสด ถั่วลิสง และมะนาวสด รสชาติกลมกล่อมแบบไทยแท้",
    price: 120,
    badge: "เมนูยอดนิยม",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    desc: "ต้มยำรสจัดจ้านหอมสมุนไพร ตะไคร้ ใบมะกรูด ข่า พร้อมกุ้งสดตัวโต เสิร์ฟร้อน ๆ กลิ่นหอมชวนน้ำลายสอ",
    price: 150,
    badge: "รสจัดจ้าน",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ข้าวมันไก่ต้ม",
    desc: "ข้าวมันหอมมันจากน้ำซุปไก่ เสิร์ฟพร้อมไก่ต้มนุ่มฉ่ำ น้ำจิ้มเต้าเจี้ยวสูตรเด็ด และน้ำซุปใสหอมกลิ่นขิง",
    price: 65,
    badge: "จานเด็ด",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ส้มตำไทย",
    desc: "มะละกอเส้นกรอบคลุกน้ำปลา มะนาว น้ำตาลปี๊บ ถั่วลิสง และกุ้งแห้ง รสเปรี้ยวหวานเค็มเผ็ดครบรส",
    price: 55,
    badge: "Healthy",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ข้าวผัดกะเพราหมูสับ",
    desc: "ข้าวผัดหอมใบกะเพรา พริกขี้หนู และหมูสับ เสิร์ฟพร้อมไข่ดาวกรอบขอบ ราดด้วยน้ำปลาพริก",
    price: 70,
    badge: "เมนูสิ้นคิด",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "แกงเขียวหวานไก่",
    desc: "แกงกะทิเข้มข้นหอมเครื่องแกงเขียวหวาน ไก่นุ่ม มะเขือเปราะ และใบโหระพา เสิร์ฟคู่ข้าวสวยร้อน ๆ",
    price: 95,
    badge: "รสกลมกล่อม",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "หมูกระทะ",
    desc: "หมูหมักนุ่มหลากหลายส่วน พร้อมผักสดและน้ำจิ้มสูตรพิเศษ ย่างบนกระทะร้อน ๆ กินกับเพื่อนสนุกสุด ๆ",
    price: 199,
    badge: "สำหรับสายปาร์ตี้",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
];

const imageEl = document.getElementById("foodImage");
const nameEl = document.getElementById("foodName");
const descEl = document.getElementById("foodDesc");
const priceEl = document.getElementById("foodPrice");
const badgeEl = document.getElementById("foodBadge");
const button = document.getElementById("randomBtn");
const cardBody = document.querySelector(".card-body");

let currentIndex = 0;

function formatPrice(price) {
  return "฿" + price.toLocaleString("th-TH");
}

function pickRandomIndex() {
  if (foods.length <= 1) return 0;
  let next = currentIndex;
  while (next === currentIndex) {
    next = Math.floor(Math.random() * foods.length);
  }
  return next;
}

function renderFood(index) {
  const food = foods[index];
  currentIndex = index;

  imageEl.classList.add("fade");

  const apply = () => {
    imageEl.src = food.image;
    imageEl.alt = food.name;
    nameEl.textContent = food.name;
    descEl.textContent = food.desc;
    priceEl.textContent = formatPrice(food.price);
    badgeEl.textContent = food.badge;

    cardBody.classList.remove("pop");
    void cardBody.offsetWidth;
    cardBody.classList.add("pop");

    imageEl.classList.remove("fade");
  };

  const preload = new Image();
  preload.onload = apply;
  preload.onerror = apply;
  preload.src = food.image;

  setTimeout(() => {
    if (imageEl.classList.contains("fade")) apply();
  }, 700);
}

button.addEventListener("click", () => {
  button.classList.remove("spin");
  void button.offsetWidth;
  button.classList.add("spin");

  renderFood(pickRandomIndex());
  button.blur();
});

renderFood(0);
