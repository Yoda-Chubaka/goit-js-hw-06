const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createImages = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 300></li>`;
const gallery = images.reduce(
  (acc, item) => acc + createImages(item),
  ""
);
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", gallery);
list.setAttribute("style", "list-style-type: none; display: flex; gap: 30px");