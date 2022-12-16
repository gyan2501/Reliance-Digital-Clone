import React, { createContext, useState } from "react";

const images = [
  "https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4Mjc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDNlLzk5MzExODEzNTkxMzQuanBnfDA5Nzc0YWExYjdjM2YzNTg4Njk4MDJjZGU1ZWQ4NzAzOTIzZDgxMWU2MjVhYjdkNTI2MzBhNWJhYzg0ZTZjMTk",
  "https://www.reliancedigital.in/medias/Apple-S8-CLP-Banner-14-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NzY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDBkLzk5MzExODU1MjA2NzAuanBnfDA3MWZiOGZlMzdjOTYzZDFhZGUyZWMzMjdmOTgxZmJjOGY1MTI2OGI0ZjA3YjU1YzUzNDllZjlkMmQwMmFkMjA",
  "https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY",
  "https://www.reliancedigital.in/medias/MacBook-Carousel-Banner-14-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4OTk1MHxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGM4Lzk5MzA5MzA4NDc3NzQuanBnfDZkNWJmZTg0MDg4OWIyZmIyY2ZmYTAwNTNkZjU3Y2YwYjU5NTQ2MTBlMTZkNzZiYWUxN2JhZjIyYTg3ZTVjMzA",
  "https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY",
  "https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0",
  "https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI",
  "https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y",
  "https://www.reliancedigital.in/medias/Samsung-Thursdays-Carousel-Banner-02-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NjY0OHxpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDg0Lzk5MTg5MjQwOTU1MTguanBnfDQ3MWE0ZWNlMWVmMGY0Nzc0NWJiZGIxM2FlZWEyMzkzZmE1ZGVjNjAyZWVhNTY4NDY0ZTM4NmJmOGYxOWYzYTI",
  "https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky",
  "https://www.reliancedigital.in/medias/Apple-Accessories-Carousel-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MjY3M3xpbWFnZS9qcGVnfGltYWdlcy9oZTIvaDg3Lzk5MjgxNzE1NTI3OTguanBnfDkzOTI0MDE5YzgxOTVmNzdiMTBlNWZhMTQwMWZmNDc1ZTU2MzY5YmIwZTBlZWQ2ZjRkYWVhYzBkZTkzMTM3Y2M",
  "https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0",
];
const properties1 = {
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  indicators: true,
  transitionDuration: 100,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

let addItems1 = [
  {
    image:
      "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDMyLzk4NDEyMjc0OTc1MDIuanBnfDEwNjk4MWE3MTQ5MmY1YjJkMjE1NWYwMTFkNDlhMTViNmNkMmFjOGFjODE5NTEwYzdkZTA2MDJhYWM1MTVjYzI",
    name: "HP 14s-dq3032tu Thin &amp  Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 46900,
    offer: 59900,
    save: 10,
    id: 1,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGQ5Lzk4MTkzMTc0MDM2NzguanBnfDdiZDg3ZTA1NjE0MTE1NzFjNGU3NDE3OTMyYzc0NzljMzRiM2RjNjE5OGFhN2U1YWVhNjQ3YmI5YTMwM2JhNjI",
    name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    price: 30099,
    offer: 39900,
    save: 10,
    id: 2,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk3N3xpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDY4Lzk4MDcxMDAwNTE0ODYuanBnfDk1ZTliOGMwYjUzMDExODFkZDRkZDQyYmZmZWM4M2I1OGExN2E2MGIyMDkwM2NlZTdmYzA3NWM0NzAwY2YzMmE",
    name: "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    price: 27099,
    offer: 35900,
    save: 10,
    id: 3,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzM2MnxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNkLzk4MjQ0MzU0NzAzNjYuanBnfDc0YTRhMTY0NzNlMjQ5YzY2MDg3ZmU2YjQyNmNhNzU0ODQ5ZjkyOGE1N2RjMDBhZTM4YTM5ZjQ4ZTlhMmM0NTE",
    name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    price: 44099,
    offer: 49900,
    save: 10,
    id: 4,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGE0Lzk4NDk0MDkwMTE3NDIuanBnfDE4ZGNiN2ZkMzM4YWU3Yjc2YTJmZjRmNjk4OWY1N2YzY2I1NDAxOGM1ZDU5YTIxNDAzNjVhZGEzNGEyOGZmZDc",
    name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 39009,
    offer: 41900,
    save: 10,
    id: 5,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NzU3MXxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaGVkLzk4NDkyMzgzMjMyMzAuanBnfDA0NWNmNjdiOWE2ZjAyMDBhZjNjNWVhNThjNmJlYmE3MDc1NTc4MWU1MGJjZjgzYTNlYzBjYWVlOGI5NTZmY2Y",
    name: "Acer A315-23 Aspire 3 Laptop (AMD Ryzen 3-3250U/4 GB/256 GB SSD/AMD Radeon Graphics/Windows 11/ Full HD), 39.62 cm (15.6 inch)",
    price: 40099,
    offer: 49900,
    save: 10,
    id: 6,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",
    name: "Acer A314-35 Aspire 3 Laptop (Intel Celeron N4500/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 35099,
    offer: 39900,
    save: 10,
    id: 7,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjAwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDMyLzk4NDEyMjc0OTc1MDIuanBnfDEwNjk4MWE3MTQ5MmY1YjJkMjE1NWYwMTFkNDlhMTViNmNkMmFjOGFjODE5NTEwYzdkZTA2MDJhYWM1MTVjYzI",
    name: "HP 14s-dq3032tu Thin &amp  Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 20049,
    offer: 29900,
    id: 8,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGQ5Lzk4MTkzMTc0MDM2NzguanBnfDdiZDg3ZTA1NjE0MTE1NzFjNGU3NDE3OTMyYzc0NzljMzRiM2RjNjE5OGFhN2U1YWVhNjQ3YmI5YTMwM2JhNjI",
    name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    price: 40099,
    offer: 49900,
    save: 10,
    id: 9,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk3N3xpbWFnZS9qcGVnfGltYWdlcy9oNmQvaDY4Lzk4MDcxMDAwNTE0ODYuanBnfDk1ZTliOGMwYjUzMDExODFkZDRkZDQyYmZmZWM4M2I1OGExN2E2MGIyMDkwM2NlZTdmYzA3NWM0NzAwY2YzMmE",
    name: "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    price: 46009,
    offer: 56900,
    save: 10,
    id: 10,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzM2MnxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNkLzk4MjQ0MzU0NzAzNjYuanBnfDc0YTRhMTY0NzNlMjQ5YzY2MDg3ZmU2YjQyNmNhNzU0ODQ5ZjkyOGE1N2RjMDBhZTM4YTM5ZjQ4ZTlhMmM0NTE",
    name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    price: 42399,
    offer: 52900,
    save: 10,
    id: 11,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGE0Lzk4NDk0MDkwMTE3NDIuanBnfDE4ZGNiN2ZkMzM4YWU3Yjc2YTJmZjRmNjk4OWY1N2YzY2I1NDAxOGM1ZDU5YTIxNDAzNjVhZGEzNGEyOGZmZDc",
    name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    price: 46009,
    offer: 59900,
    save: 10,
    id: 12,
    qty: 0,
  },
];

let addItems2 = [
  {
    image:
      "https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg",
    name: "Misfit by boAt T30 RTL Men's Trimmer, Active Black",
    price: 4099,
    offer: 5990,
    save: 10,
    id: 13,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Prestige-PKOSS-Electric-Kettles-491373220-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjQ0OHxpbWFnZS9qcGVnfGltYWdlcy9oMDUvaDA4LzkyOTM4MDU5NDQ4NjIuanBnfDM2YTI4NmExMjEzZjkxZGRlYjRhNzEwNjc1OWQ0ZTM3OTkwYzRiYmM5NWRiMTdjMDVlZGI0MjdlZGRlZTg0ZTM",
    name: "Prestige-PKOSS-Electric-Kettles-491373220",
    price: 3499,
    offer: 4099,
    save: 10,
    id: 14,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Pigeon-Zest-Juicer-Mixer-Grinder-492664336-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzY3OHxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaGQ4Lzk3NTUxODg5MjAzNTAuanBnfGY4MDVmYTkwMmIxOGU0MGE3NGM2NjVkODhhZWY5ZGFkZGZkMTk5YzE5NzI0YWUyZjYwMjI5YzAyODI2ZjQ4NjA",
    name: "Pigeon-Zest-Juicer-Mixer-Grinder-492664336",
    price: 5099,
    offer: 5990,
    save: 10,
    id: 15,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Lifelong-LLDI09-Irons-492664307-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3M3xpbWFnZS9qcGVnfGltYWdlcy9oODkvaDIxLzk4NTM2Nzg1ODM4MzguanBnfDc2NjcxZTI5NjFkMTBiM2EyNDhiZGRmMzkwZDQyMzA0NzI3ZTU4MmEyYTRiODdjODZiN2Q5MmQyZmU1NjAzZGM",
    name: "Lifelong-LLDI09-Irons-492664307-i-1",
    price: 4099,
    offer: 5000,
    save: 10,
    id: 16,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/PIGEON-Mini-Eco-Speciality-Appliances-492664295-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTgwMnxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDY1Lzk3NTQyMjcyNzc4NTQuanBnfDU4NzljN2IzOWI4YWM2NWVjOTc4ZjNlM2NmYjVhNjc5NGM2NTRmZWY2NmJjMmFjNmY2OTVkYWUwZmRjNzgwN2E",
    name: "PIGEON-Mini-Eco-Speciality-Appliances",
    price: 4699,
    offer: 5200,
    save: 10,
    id: 17,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5OTA2NnxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGNhLzk1NDU0Mjk1ODE4NTQuanBnfDY0OWE4Mzc3OGJkM2Y4MzQ1NmEyODVkOWJmN2JlZDhiZDVjYzg2NGY2YzU5ZmQ5OThhMWVhZTU2MzgwNzMwZDA",
    name: "Reconnect-DSM302-CA-Sandwich-Maker-491604309",
    price: 1799,
    offer: 2900,
    save: 10,
    id: 18,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTQ3MHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDVhLzk2MTM1NzQ1NzAwMTQuanBnfDU3ODhkZjgxZWRlMjkzYTE0MDMxNmM4ODU1ODNkMjA3ZWQxY2UyMWU3ZjhmM2UzYjZmOTBkYjU1N2U3Yjc4OTE",
    name: "BPL-BBT001MLC-Beard-Trimmer-491903144",
    price: 1099,
    offer: 2900,
    save: 10,
    id: 19,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Lifelong-Infinia-Juicer-Mixer-Grinder-492391909-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDNjLzk2NDk2NDg1MDA3NjYuanBnfDViM2QyYTQ0NGJkMDYyNTZiZWEyM2MxNTJkNWM2Mjc2OTZhZmI5ZmRkNGViNzY5MGM4ZDRjMDE3NGNhMjEwZGU",
    name: "Lifelong-Infinia-Juicer-Mixer-Grinder-492391909",
    price: 13249,
    offer: 17000,
    id: 20,
    save: 10,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Reconnect-DHS101-MY-Hair-Straightener-DHS101-491604307-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NTQwNHxpbWFnZS9qcGVnfGltYWdlcy9oMDUvaDg4Lzk0MTE3NzM0MzE4MzguanBnfDMzYzVmMzNlYTdjMDc2ZTU3ODZiMmMxYWE5NzU1MjQ1ZWVmM2RmM2QwNzQ1YjFlNWNmYjEzZjNjNDUyNzIxZDE",
    name: "Reconnect-DHS101-MY-Hair-Straightener-DHS101-491604307",
    price: 11099,
    offer: 17000,
    save: 10,
    id: 21,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Candes-Lynx-Fan-492664647-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTU3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTAvaDAzLzk4MTYzNDkwODE2MzAuanBnfDExOGJkNDM4NzNlMGNhMWQ3ZTk3MmFmMTFmYjE4OWVjYTU1NTAwNWUyZWI4YzdkNjczZmM0Y2RiNGE0MTE4M2U",
    name: "Candes-Lynx-Fan-492664647-i-1-1200Wx1200H",
    price: 17000,
    offer: 19900,
    save: 10,
    id: 22,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/EUREKA-GWPDMRUMM00000-Water-Purifier-492911044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjE3N3xpbWFnZS9qcGVnfGltYWdlcy9oODAvaDdhLzk4MzUxODgzODc4NzAuanBnfGFmNzJjMmZlOWM1MGM2Y2QzYzhmNTE3ZDFlMTc4YTg2YjJkYzk1ZGIwNDU5ZTk3NDAyYzk5ZDAzODI3M2QwMzQ",
    name: "EUREKA-GWPDMRUMM00000-Water-Purifier",
    price: 20099,
    offer: 29900,
    save: 10,
    id: 23,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/PRESTIGE-PIC22-1200WT-BK-INDUCTION-COOKTOP-491551569-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjI5MHxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaGRiLzk2OTE2NTg0ODU3OTAuanBnfDJlNzQ1MTEyMTFhNmMwNDU2YzJiMTVmMGU5YTVhZTk0OGYzYmMwNmI3ZTYxZGNlYzBjYjY1MWRhY2RmNDQ4ZDg",
    name: "PRESTIGE-PIC22-1200WT-BK-INDUCTION-COOKTOP",
    price: 7999,
    offer: 9900,
    save: 10,
    id: 24,
    qty: 0,
  },
];

let addItems3 = [
  "https://www.reliancedigital.in/medias/Sansui-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNjM0NHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDA4Lzk4NjE5ODU3OTYxMjYuanBnfDdjMmNkOWMyNTFlNTAyYTBkNjg3ZWMxYjBmMGNlYzQwMzkzZjc2Y2QyOGM4MzRiNDYxYmQ5ZjU3MmZhNjE4NjI",
  "https://www.reliancedigital.in/medias/Samsung-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMzc1OHxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDc1Lzk4NjE5ODU4NjE2NjIuanBnfDVhZWRlNjAzYmE2MWUxNGNiMTgyMTIwODM0ZTBhYTg5ZmJkZDEyZTA5YmFkYmYwMTNiZWE5YTBmMGQyMzcyMzE",
  "https://www.reliancedigital.in/medias/LG-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNzk1MXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaGY4Lzk4NjE5ODU5OTI3MzQuanBnfGY3NzdiYzA0MDFkZjhmNTRlYTI5ODgyYWM5MTdjNjI0ZjZjNjlhY2E3YTIwNTI2MzllYTI5MGQxY2Q0Mjg4Yjk",
  "https://www.reliancedigital.in/medias/Candy-Washing-Machines-18-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyMjEyNXxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDAwLzk4NjE5ODYxMjM4MDYuanBnfDU5MzBjMmRjZThmNTYyZWY1ZmIyYTNlMDdlYzg1YWFkYzlhZWVmNTE3MjM0ZTM3MGNmOTBlMDZiNDIwM2Y4YmQ",
];

let addItems4 = [
  "https://www.reliancedigital.in/medias/Smartwatches-Small-Banners-01.jpg?context=bWFzdGVyfGltYWdlc3w0NDA0MnxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGRiLzk5MjgzNzA5MTMzMTAuanBnfGYwOWU2ZjQ3Y2Y0OWI2NmVhZGVkYWM2M2ZiMzQ4YTlhODRkZDY4ODZmODA1OGQyZWNiYWVhODNmNWM2YWMwMmY",
  "https://www.reliancedigital.in/medias/Realme-Smart-TV-Great-Deals-Banner-13-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NzY3MHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDg2Lzk5MzExODY3NjU4NTQuanBnfDA5YzNlMTkwNmM0ZWI3ZGJlYjI5Y2E0ZmQ5M2M5YjNkZmZjZmVlMjBmOGU1ZGIwNDY3NjFhNTcwMWM4ZmFlOWI",
  "https://www.reliancedigital.in/medias/Printers-Small-Banners-01-1-.jpg?context=bWFzdGVyfGltYWdlc3w0MDAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGQxLzk5Mjg3MzAzNDU1MDIuanBnfGMyNTg3NWQyZWRmMGU2M2EzZmEwM2U2MWNlMTA3ZWQzYjk4MmRhM2EzYjY0N2FiZGM4OGFlYWQ2NjBlZjE4YWE",
  "https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU",
  "https://www.reliancedigital.in/medias/Smart-Home-Products-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzOTAxM3xpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDMxLzk5MzExOTE5NDMxOTguanBnfDhiY2ZkOWE5YmQ3OWFkYmM2OWUwNjIwODQ4NGFkMWI4MDExZGQ5ZTIyNzkyMmZiMDM2ZDcyYjRkM2M4NmQ0MTA",
  "https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y",
  "https://www.reliancedigital.in/medias/Samsung-M13-5G-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGY3Lzk5MjM5MDIzNDExNTAuanBnfDdiZjliNDZlOWUxZDFjZDQ2MDkzYjdjZDZhNDVlNWI0MGYwNTAwOWJkOWM4MWUzMTUyYmNmZmRmZjk3NjIwYjk",
  "https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI",
];

let addItems5 = [
  "https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk",
  "https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm",
  "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2",
  "https://www.reliancedigital.in/medias/Samsung-Smart-HD-TV-NPI-D-11.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzk4NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2gwOC85ODYyNDU3NjU1MzI2LmpwZ3wxZjgxYTE3OTBjMjE4Zjg1YzEwZGU1ZjkzYzFkYjc2Yjg4YjQzNjkxNjQyNzQyMTkxNmIwMTA2MDcxNDk2YWNh",
  "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Dial-NPI-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxOTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2g1Mi85ODYwNjY3ODAxNjMwLmpwZ3wyY2UxNjU1ZDQ1N2NjOTc4MmNhZjE2NTk1YTAwNDIwMjFjYjA2MzNhOGUxY2Y1YmYyMWI1NmZjZmQ0ZjNjNGNk",
  "https://www.reliancedigital.in/medias/Sony-Bluetooth-WI-C100-D-NPI-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjE1NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2g4My85ODYyNDMwODUxMTAyLmpwZ3xlZmRjZTEzZWI3YWYwMTlhNWY2YmVhMjMyNDJhZWEzYmZlMDFjMzRjYjI3YTE0Y2NkYThkZmE1MjZlODYzMDI5",
];

let addItems6 = [
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
    tag: "Smartphones",
  },
  {
    link: "/laptops",
    img: "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
    tag: "Laptop",
  },
  {
    link: "/topsellers",
    img: "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
    tag: "TV",
  },
  {
    link: "/smartwatches",
    img: "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
    tag: "Watch",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
    tag: "Washing Machine",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
    tag: "Speakers & Headsets",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
    tag: "Camera",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
    tag: "Smartphones",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
    tag: "Laptop",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
    tag: "TV",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
    tag: "Watch",
  },
  {
    link: "/smartphone",
    img: "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
    tag: "Washing Machine",
  },
];

let addItems7 = [
  {
    img: "https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk",
    h1: "INSTA DELIVERY",
    h2: "LESS THAN 3 HRS",
  },
  {
    img: "https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh",
    h1: "BEST FINANCE OPTIONS",
    h2: "WIDE RANGE",
  },
  {
    img: "https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY",
    h1: "SERVICE GUARANTEE",
    h2: "HASSLE FREE",
  },
  {
    img: "https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU",
    h1: "UNMATCHED NETWORK",
    h2: "700 CITIES,2000 STORES",
  },
];

let addItems8 = [
  {
    image:
      "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjcyMXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGU1Lzk4MTQ3MTk5MjIyMDYuanBnfDU4NmIxM2U0OWY3NGRmYjI3ZTA0NDQwN2EzN2ZmMDgwYjllYTQ4ZjU5OGU4MmUwYzVlNDhmN2I0OGNiZTgzYWU",
    name: "Hammer-PULSE-3-0-Smart-Watch-492849894",
    price: 35900,
    offer: 35900,
    save: 10,
    id: 25,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjQ4OHxpbWFnZS9qcGVnfGltYWdlcy9oMzkvaGU2Lzk1NjY5ODUwMjc2MTQuanBnfGI1ZDdlNzNkOWQ2NzBkNDBkMzllNTk2ZDE5OWMyYzhlNjc4NWEwMTU1MmNlMmYxOTZlNDQ2ZGRhOTI3NjY2ZjU",
    name: "Fire-Boltt-Smartwatch-BSW001-Black",
    price: 35900,
    offer: 45900,
    save: 10,
    id: 26,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDgzOXxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDJhLzk4NTIzMTc1MzIxOTAuanBnfDlmZWQyYjMyZGJmMDMwOTI1YWI1YTI4OWQyOTI4NDM3NTgyYmJjNTFmZTE4NDE4YjgyMjg0NjJmOTBkYTZhZTQ",
    name: "Fire-Boltt-Ninja-Smartwatch",
    price: 35900,
    offer: 59900,
    save: 10,
    id: 27,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTkwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWMvaGVkLzk4NDMyNjM5OTU5MzQuanBnfGFlZDk2NDFlN2NlN2YyZGFlZjAzZmUyOWJmZjNlNzBjMTZkY2JhMDQ1ZjY4ZTc3MjFjYWY5NTYyNTQxNzA2MDI",
    name: "Noise-Colorfit-Grande-Smart-Watch-492850519",
    price: 35900,
    offer: 59900,
    save: 10,
    id: 28,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDAwN3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDA3Lzk3NTU3Nzg1NDc3NDIuanBnfDQxZGE4MzYwMzI2NjZiZjJkYWQyM2VmOGNiZTc5OWE0YmU0NTM3ODk3ZjgwMGZlYmNjMThhMTRjZmM5NDMyN2Y",
    name: "boAt-Watch-Flash-RTL-Smart-Watches-492574195",
    price: 35900,
    offer: 59900,
    save: 10,
    id: 29,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjU2OXxpbWFnZS9qcGVnfGltYWdlcy9oNGEvaGNhLzk4MTc1MTIwMTc5NTAuanBnfDQxYTcxZTQyYjQxNzYwOGFkOTkxN2EyMDM3NTg1OTg5MWZmMDMzY2UwN2M2YTY5OTkwMzBiZTBhNTVjYjIyM2I",
    name: "Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963",
    price: 38900,
    offer: 49900,
    id: 30,
    save: 10,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NTU5fGltYWdlL2pwZWd8aW1hZ2VzL2hkZC9oZjUvOTE5NjU4MTEyNjE3NC5qcGd8OTU3MjZmNzM3YWFmOTEyYmY4Zjk5ZDg2NWFkZDA0NzBmMzNiODlmMjI4OWJkZjBjMTI0YTBmNDlkNmY5OTdlNg",
    name: "Apple-MTF32HN-A-Smart-Watches-491488097",
    price: 25900,
    offer: 29900,
    save: 10,
    id: 31,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/boAt-Wave-Fit-Smartwatch-492849179-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTQ0M3xpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDJkLzk3ODgxNjE5MTY5NTguanBnfGU3MjI0N2ZiOTNmMThkZTUwNzAzNzQ5NTY1MTc1N2VjODYyMzIzNGQ3YzIzYTg5ZmYzODc3Y2MxZjUwZWUwYWQ",
    name: "boAt-Wave-Fit-Smartwatch-492849179-i",
    price: 30900,
    offer: 39900,
    save: 10,
    id: 32,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Ring-Smart-Watches-491997940-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzU1MnxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDFmLzk2NTkyODExNzg2NTQuanBnfGJkMjU5OWU5OGM4OTQ5ZGMzYTFhZDRiMDAyYWM1MWExYTczNmY3ZmI3MGM1ZmZjODEzMjVjNzUzNGI3ZDFhNDQ",
    name: "Fire-Boltt-Ring-Smart-Watches-491997940",
    price: 25900,
    offer: 29900,
    save: 10,
    id: 33,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574196-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzkxOHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDQ4Lzk3NTU3Nzg4NzU0MjIuanBnfDE3MDQ0Mjk3NzY5MGUzNWQzZTI5YzJiNTM4MmEzNzY3NzBmZTYxY2ZlZjJiZGQxNDVlYThmZDk4OWM2YTE4ZDE",
    name: "boAt-Watch-Flash-RTL-Smart-Watches-492574196",
    price: 45900,
    offer: 59900,
    save: 10,
    id: 34,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTkwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWMvaGVkLzk4NDMyNjM5OTU5MzQuanBnfGFlZDk2NDFlN2NlN2YyZGFlZjAzZmUyOWJmZjNlNzBjMTZkY2JhMDQ1ZjY4ZTc3MjFjYWY5NTYyNTQxNzA2MDI",
    name: "Noise-Colorfit-Grande-Smart-Watch-492850519-i",
    price: 35900,
    offer: 49900,
    save: 10,
    id: 35,
    qty: 0,
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDgzOXxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDJhLzk4NTIzMTc1MzIxOTAuanBnfDlmZWQyYjMyZGJmMDMwOTI1YWI1YTI4OWQyOTI4NDM3NTgyYmJjNTFmZTE4NDE4YjgyMjg0NjJmOTBkYTZhZTQ",
    name: "Fire-Boltt-Ninja-Smartwatch-492403641-i",
    price: 45900,
    offer: 59900,
    save: 10,
    id: 36,
    qty: 0,
  },
];

let addItems9 = [
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGE3Lzk4MzE2NzY5MzYyMjIuanBnfGE5M2ZlNmIyNDdkY2EwODAyMDIzYmJhN2E5NzU3MmRlZmUxNGMwYmFkNzA2M2RkYWE3NmNjYWJmMmNhMzE4MjM",
    name: "TCL-D311T-LED-492572945-i-1-1200Wx1200H",
    price: 40099,
    id: 37,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/IFFALCON-43F2A-Television-492338468-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwNXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDg5Lzk1ODA4NzU2Nzc3MjYuanBnfDk3ZmIwN2RjZTUxNTA1YTBmMzk5MWY4YjA3OGJmYjJkNGQ3MDFjNmJhNjU1Yjk5MWRhZTNmNTI3ZTE0ZmExNTc",
    name: "IFFALCON-43F2A-Television-492338468",
    price: 29900,
    id: 38,
    offer: 31900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/TCL-32S5201-Smart-TV-492403797-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTU3MHxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDZmLzk4MzU0MDkzNDI0OTQuanBnfGViMTUxYmE0YmU4YzUyODU5MzM2ZTY2NjhjZjc1YTBhNGI5OWQ0OWNiYjg0OTkyYTlhMmI0ZGQyZDkxOWQwN2I",
    name: "TCL-55P615-Televisions-491934672-i-1-1200Wx1200H",
    price: 35900,
    id: 39,
    offer: 45900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/IFFALCON-43U61-Television-492579406-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDk0OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2g5OS85NzQ1OTQwODczMjQ2LmpwZ3w4NmYzNzdiNDc1ZGJhMTczYzM3ZjdhZDI0ODUxZjU2ZjNmNjZhOTJhMzg1ZWFiYWMwNmY3NDVkMmY0ZThlOWQ4",
    name: "TCL-565675-Televisions-491934672-i-1-1200Wx1200H",
    price: 35900,
    id: 40,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/TCL-32S65A-Television-491936168-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzI4OHxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDUxLzk4MzI3MTE0MjE5ODIuanBnfDA0YmJjYmNlNTdkZDYyMTA3MGU3NmNmZDhlZjM5OGQ1ZjgwZjIzMDhkNGNhOTE3MDZhNjhlNDllOGE3NGZhNWM",
    name: "IFFALCON-43U61-Television-492579406",
    price: 49900,
    id: 41,
    offer: 59900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/IFFALCON-32F52-Televisions-492403800-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTU5OXxpbWFnZS9qcGVnfGltYWdlcy9oODcvaDc0Lzk3MjcxMzgxMzYwOTQuanBnfDM1N2Q4MTYxMTcyZWMwZjIyM2EzMWJkNTA0OGE5YTQ4OGM2MTlkMDFhYzQyYzRkM2E3MDFlYzQ3MWJhYWQ0YjM",
    name: "TCL-55P615-Televisions-491934672-i-1-1200Wx1200H",
    price: 44900,
    id: 42,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/TCL-55P615-Televisions-491934672-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTE2OXxpbWFnZS9qcGVnfGltYWdlcy9oMTgvaGE0Lzk4MzI3MTEwOTQzMDIuanBnfDc1YmI2MThlYTEwMDY1YWVlYTg5MGQ5ZjdlNWQ1N2ZlNmVkYTI1YzQwMzU4YTgwYmJmMTZiMWY2ZmEyMjQ5MGY",
    name: "TCL-55P615-Televisions-491934672-i-1-1200Wx1200H",
    price: 40900,
    id: 43,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGE3Lzk4MzE2NzY5MzYyMjIuanBnfGE5M2ZlNmIyNDdkY2EwODAyMDIzYmJhN2E5NzU3MmRlZmUxNGMwYmFkNzA2M2RkYWE3NmNjYWJmMmNhMzE4MjM",
    name: "TCL-D311T-LED-492572945-i-1-1200Wx1200H",
    price: 39900,
    id: 44,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/IFFALCON-43F2A-Television-492338468-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwNXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDg5Lzk1ODA4NzU2Nzc3MjYuanBnfDk3ZmIwN2RjZTUxNTA1YTBmMzk5MWY4YjA3OGJmYjJkNGQ3MDFjNmJhNjU1Yjk5MWRhZTNmNTI3ZTE0ZmExNTc",
    name: "IFFALCON-43F2A-Television-492338468",
    price: 37900,
    id: 45,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/TCL-32S5201-Smart-TV-492403797-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTU3MHxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDZmLzk4MzU0MDkzNDI0OTQuanBnfGViMTUxYmE0YmU4YzUyODU5MzM2ZTY2NjhjZjc1YTBhNGI5OWQ0OWNiYjg0OTkyYTlhMmI0ZGQyZDkxOWQwN2I",
    name: "TCL-32S5201-Smart-TV-492403797-i-1",
    price: 41009,
    id: 46,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/IFFALCON-43U61-Television-492579406-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDk0OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2g5OS85NzQ1OTQwODczMjQ2LmpwZ3w4NmYzNzdiNDc1ZGJhMTczYzM3ZjdhZDI0ODUxZjU2ZjNmNjZhOTJhMzg1ZWFiYWMwNmY3NDVkMmY0ZThlOWQ4",
    name: "IFFALCON-43U61-Television-492579406",
    price: 43900,
    id: 47,
    offer: 49900,
    save: 10,
  },
];
let addItems10 = [
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Apple-iPad-10.2-inch-Tablet-491997817-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDU0fGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMjEvOTYzNTMxNzEyMTA1NC5qcGd8ZTAwN2I5Mjg5N2RkZmU4YzBkOTllNTljNjBjNDRlYTA1MGYwMzJjMGVmYWM5M2NmZDFjM2U2ODMwMjc5MTI3OQ",
    name: "Apple-iPad-10.2-inch-Tablet-491997817",
    price: 20499,
    id: 48,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ",
    name: "Lenovo-8506X-Regular-Tablets-492849048",
    price: 34499,
    id: 49,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Lenovo-ZA6W0191IN-Regular-Tablets-492849333-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODQzMHxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDU1Lzk3OTExMjY3NjU1OTguanBnfDIxNTk3MGU0ZjQ1M2ZlYzU2Zjc5OTJlMmYzMmZhOTI2YTg3YTYxM2FlNDU1NGZkMTA3OWM1YzA3YjI4NGJmZjI",
    name: "Lenovo-8506X-Regular-Tablets-492849048",
    price: 30499,
    id: 50,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Samsung-T225N-Regular-Tablets-492849721-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjg0MnxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGYzLzk4MDQxMDk0MTQ0MzAuanBnfDExNGIzNjE3YmJlMGQ0NmQwYjMxNzNlN2IxYTc3NzlhMTgyYzE4MTg4ZTY1MjA4Zjk1M2EzNTJmODUyMTA5NzY",
    name: "Samsung-T225N-Regular-Tablets-492849721",
    price: 24499,
    id: 51,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Samsung-Galaxy-S8-Tablets-492849227-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzE2N3xpbWFnZS9qcGVnfGltYWdlcy9oMWQvaDQ0Lzk3ODA0NTUzNzQ4NzguanBnfDM3YTdiMDE4MTM0YmM0ZmI3Zjk0YWVhOTMyYjVhYmQ2ZWYzNTEzOGIwYjNiZGY2NWEyNTkyOTdmZjZhYzQ1YzQ",
    name: "Samsung-T225N-Regular-Tablets-492849721",
    price: 22499,
    id: 52,
    offer: 30900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Apple-iPad-10.2-inch-Tablet-491997817-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDU0fGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMjEvOTYzNTMxNzEyMTA1NC5qcGd8ZTAwN2I5Mjg5N2RkZmU4YzBkOTllNTljNjBjNDRlYTA1MGYwMzJjMGVmYWM5M2NmZDFjM2U2ODMwMjc5MTI3OQ",
    name: "Apple-iPad-10.2-inch-Tablet-491997817",
    price: 20499,
    id: 53,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDlhLzk3ODI2NTE2MTczMTAuanBnfDQ2NGE4NGI1YjhmZWFkZTE1YThiYzE2YjcyZDBlODQ4MTk4M2Y2NmE2ZGMyOWNiN2EzZmU3ZmNkM2YzM2MyYjQ",
    name: "Lenovo-8506X-Regular-Tablets",
    price: 33399,
    id: 54,
    offer: 41900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Lenovo-ZA6W0191IN-Regular-Tablets-492849333-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODQzMHxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDU1Lzk3OTExMjY3NjU1OTguanBnfDIxNTk3MGU0ZjQ1M2ZlYzU2Zjc5OTJlMmYzMmZhOTI2YTg3YTYxM2FlNDU1NGZkMTA3OWM1YzA3YjI4NGJmZjI",
    name: "Lenovo-8506X-Regular-Tablets",
    price: 34099,
    id: 55,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Samsung-T225N-Regular-Tablets-492849721-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjg0MnxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGYzLzk4MDQxMDk0MTQ0MzAuanBnfDExNGIzNjE3YmJlMGQ0NmQwYjMxNzNlN2IxYTc3NzlhMTgyYzE4MTg4ZTY1MjA4Zjk1M2EzNTJmODUyMTA5NzY",
    name: "Samsung-T225N-Regular-Tablets-492849721",
    price: 28499,
    id: 56,
    offer: 39900,
    save: 10,
  },
];

let addItems11 = [
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/OnePlus-9-Smart-Phones-491947285-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTExNXxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaDhjLzk1MTA2MzkyMDY0MzAuanBnfDhlNDQyYjI3Mjc2N2M1NGJlNGJkYTdjYjEwMzk5OTY3MzQ3NzI1NDgzZjgxNGUzMWRlMjc5NWU1MjFiN2MwZDk",
    name: "OnePlus-9",
    price: 20499,
    id: 57,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q",
    name: "OnePlus-9",
    price: 30499,
    id: 58,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/OnePlus-9-Pro-Smart-Phones-491947275-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTQ5MHxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDY0Lzk1MTA2MjEyNDk1NjYuanBnfGVmMGE2NzBkNGZmZmU4M2JmOGMxZWE1NzM5YTRjNjAxMjI5ZTNkYTBiZmRlZWE1Mzc1YTc0Mjc5M2ZmYThlYzQ",
    name: "Motorola-E32",
    price: 25499,
    id: 59,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849905-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDYxM3xpbWFnZS9qcGVnfGltYWdlcy9oNDAvaDAzLzk4MzQxMDY1MTk1ODIuanBnfDg0MDRiOWQxNGE5Zjk1OThkNTQ1NTJmYTU2ZTJmMzgyYTQ1OTQwYmZlZWYyNjliYTllMjEzNzBkZmZkNjVlYzE",
    name: "OnePlus-9-Pro",
    price: 20499,
    id: 60,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Samsung-M52-Smart-Phone-491998466-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODU3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaDQ5Lzk3NDk1NzgyNTIzMTguanBnfDU5YjAwZmE3ZmI4MDI3N2FhMWQ4NDlkNGFiOTFkNmMzOWFmODQxYWQyMzYyODgwMWNkZDgyOWU0MDU4ZTQ4NjA",
    name: "Motorola-E32",
    price: 39499,
    id: 61,
    offer: 45900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/OnePlus-9-Pro-Smart-Phones-491947280-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NzY5NHxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGZkLzk1MTA2MjQ5MTk1ODIuanBnfDdiNjIyOTdmY2Q0YjNjNTI5M2VkOWU4YTIyMWU2ZTY1Y2MyMjk5ZDE4NTI3YmEyNjQwZjk3MjkzODFmYzFhZTU",
    name: "Samsung-M52",
    price: 40499,
    id: 62,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Redmi-9A-Sport-Smartphone-491998274-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjQ3M3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGM3Lzk2NTQxODA0NDYyMzguanBnfDk2Y2VkOGYwYjIwMDE5OTkzMzYwNDA0MWE3Yzk2Y2IzMDgyOTVhYzdiZmExMDkwYjU1MGNiZDhlYjA1ZTRmZmE",
    name: "OnePlus-9-Pro",
    price: 22499,
    id: 63,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Motorola-G82-Mobile-Phone-492850555-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODIxMnxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaGVmLzk4NDE2NzA3ODMwMDYuanBnfGM5OWMyZTkxZGZkYzA2NWI3NWJiMTE1NDBkNWY4ZTMyOGJkNDhjMjcxMDkxYTE0Y2Q0NTBmMzk4NmMxYWVlN2Y",
    name: "Redmi-9A",
    price: 35499,
    id: 64,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTIzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGE1Lzk0MDc3NDY0NDEyNDYuanBnfDA3MmMxMTU3MzQ0M2ViMjdlMTMwNjlkZGMxOWMyNDViYjdiODJiYjZlNDExYzM4ZTQwYzQxOGZiNTk4MjMyNTk",
    name: "Motorola-G82",
    price: 31499,
    id: 65,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Tecno-TECNO-POVA3-Smart-Phones-492850709-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDIzNXxpbWFnZS9qcGVnfGltYWdlcy9oYmEvaGRhLzk4NDg2NTk4Njk3MjYuanBnfDMzODFjYzQzNDczYjAxOGViOTUxOWYxNmMwYmM0Y2E1YjAyYTAwZTBhODg3MWE5YWVkZGU3MTRiZTkyMWQ2MTg",
    name: "Apple-12",
    price: 28499,
    id: 66,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Tecno-TECNO-POVA3-Smart-Phones-492850712-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDIzNXxpbWFnZS9qcGVnfGltYWdlcy9oMTgvaDQ1Lzk4NDg3MzYyMTkxNjYuanBnfGY4YmU3ODgwNThiZjRiMjY1MmE5Njg1ZDM2ZTc0OTY5OTcxNDhkNmRhODRlMTJiZTRiYWM2NzljNTQyMWNhMjA",
    name: "Tecno-TECNO-POVA3",
    price: 20499,
    id: 67,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Samsung-M52-Smart-Phone-491998468-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODU3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaGIxLzk3NDk1ODE1MjkxMTguanBnfDEwNWI3NTgyZDEzNTRjNWFhNzkzMzNiOWQ5YzQ4Yjc1YmE1MWNiZjU1ZmI1NGJmZGY0ZTM2NGI0YzIwODQ2ZjM",
    name: "Tecno-TECNO-POVA3",
    price: 40499,
    id: 68,
    offer: 47900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/realme-C25Y-Smartphones-491998358-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3OTAzNHxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDFlLzk2NzM1NTUxODE1OTguanBnfDBkZDVhOGU3NDZjNmQ4ZDU0ZjdkNTU3ZGNjYzEwNjllM2E2ZmY1ZmU1Y2UzZjIwNWI1Y2Q0Yzg5MjczOGM0ZWM",
    name: "Samsung-M52",
    price: 44499,
    id: 69,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Vivo-T1-Pro-Smartphones-492850282-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjA2MnxpbWFnZS9qcGVnfGltYWdlcy9oNzMvaDMyLzk4MjQzNzAzMjc1ODIuanBnfGUxNmY2ZjRkYTFhMTgxZTZkNmE5ODFkZjhlZjU1NmFkYWU0MWM0OTVlMTBkY2ZhODAwYTI4ZmEzNTJkMmQ1NmQ",
    name: "realme-C25Y",
    price: 37499,
    id: 70,
    offer: 39900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Motorola-G71-Mobile-Phone-492849088-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTk3OXxpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGNmLzk4Mjg4NDc3Nzk4NzAuanBnfGQxYjE2M2ZlMTBkOGEyZGQwNWQyYjRlZWY4NTZkMzUxMDY5ZDQxMjQwYjAwMzM0NjlmNGVkYjVjNGU1NjQ2NGE",
    name: "Vivo-T1",
    price: 27499,
    id: 71,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Samsung-M536BE-Mobile-Phone-492850532-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDcxOXxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDEwLzk4NDEwMTcwMjg2MzguanBnfDU5YmVlYmJiMzIzOTQwMzdjNTNkMGMyNjFkYWJiNjEwMzUyZWQxYTY2N2M4MjI0NGYyOGZkMjZmY2M1M2FhNzE",
    name: "Motorola-G71",
    price: 42499,
    id: 72,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Motorola-G60-PANB0023IN-SMART-PHONE-492849079-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjAzM3xpbWFnZS9qcGVnfGltYWdlcy9oZmUvaGI5Lzk4MTY5MTYyMzAxNzQuanBnfGYwMDUyNjU4MzUwMmNlNmMzMWM0Y2U0NDMyODE5NjhhZDA1OWYwN2I2MWVkMTFlNDdlMDQ4ODU1MzI0NjJmMmI",
    name: "Samsung-M536BE",
    price: 20499,
    id: 73,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/REDMI-NOTE-11-Mobile-Phone-492849127-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTQ2M3xpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDFlLzk4MjAyOTcwMDMwMzguanBnfDczMWEzMjM2ZWEzNjliYmU4YWEzYmIxYTZjNzU4MGVhNGJmZmIxYWMwMWU0YTNjMzUyNjRhZjUxMDlmY2Q3YzM",
    name: "Motorola-G60",
    price: 45499,
    id: 74,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/REDMI-NOTE-11S-Mobile-Phone-492849134-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzIwOXxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDllLzk4MjAzMTc2NDY4NzguanBnfGMwMjcyNjhkZTQyNmMyODFlZTRlYjNkYzZhNTMwOTFiYTkzMDQxYWJmNWZkNTFlZTMxMjVhNzdjMjY5NGJlMmU",
    name: "Motorola-G60",
    price: 26499,
    id: 75,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Apple-MLPK3HN-A-Smart-Phones-491997702-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDkxLzk3NzYwNDgxNDQ0MTQuanBnfDk3NjgzNzA0ODZiYjQ0NzJlMmE1ZjY1ODBjNzcxN2E1NjI0MGE5MzFiNDYyNmY5NzFiN2YyZjI3YTNhMTQ0YmM",
    name: "Motorola-G60",
    price: 30000,
    id: 76,
    offer: 34900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/REDMI-NOTE-11S-Mobile-Phone-492849135-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzI0OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDA3Lzk4MjAzMDg0NzE4MzguanBnfGI2Mjg3NjVjNjNmODQxZGU5NTc0MGJkMWY4N2M5YzIzYzZjYjZkNzdkNTM0NDAwMmI5OTgxZmJhNTUwYzJiNzg",
    name: "Motorola-G60",
    price: 28729,
    id: 77,
    offer: 29900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Oppo-K10-Smartphones-492849761-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MjI5OXxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDZmLzk4MDM4NzYxNzE4MDYuanBnfGQyNGFiOWMzZGQxNDQ1Mjk4YWJjNTU5MDZhYmVhYTAyYTBiZTYwYjRiMDZiODlmOGQ0OTAyOTBiYWI5ZDg3N2Y",
    name: "Motorola-G60",
    price: 40099,
    id: 78,
    offer: 49900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Oppo-A57-Smart-Phones-492850646-i-492850646-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjM4MXxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDQ3Lzk4NDcyMzA0MzEyNjIuanBnfDgyNDVjZmNlMDIyODdjMDJlYjQ3NzczNjg4OTE1MjA4NWQxMTE1ZDQ0ZDVlOTBjOWMxMmQ1MGZjMmRiNTA0YzA",
    name: "Oppo-A57",
    price: 39499,
    id: 79,
    offer: 45900,
    save: 10,
  },
  {
    qty: 0,
    image:
      "https://www.reliancedigital.in/medias/Tecno-Spark-8-pro-Mobile-Phone-492850000-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODczOXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDQ5Lzk4MjA0MjY0MzY2MzguanBnfDA2OGY1ZTc0ODIxYTNhNTg4OTBlOWM4YTAzOGI2OWZiMjQ4NjRjOGJhZjg5MTJjMjNjMmQzYmZiYTU3NDY4Nzc",
    name: "Tecno-Spark-8-pro",
    price: 45499,
    id: 80,
    offer: 49900,
    save: 10,
  },
];



const bigarr = [
  ...addItems1,
  ...addItems2,
  ...addItems8,
  ...addItems9,
  ...addItems10,
  ...addItems11,
];
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState("");
  const [firstName, setfirstName] = useState("");
  const [flat, setflat] = useState("");
  const [street, setstreet] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [search, setsearch] = useState("");
  const [pincode, setPincode] = useState("");
  const [car, setCar] = useState(0);
  const [total, settotal] = useState(0);

  const list = {
    flat,
    setflat,
    state,
    setstate,
    street,
    setstreet,
    city,
    setcity,
    total,
    settotal,
    car,
    setCar,
    addItems11,
    search,
    setsearch,
    setemail,
    email,
    setlastName,
    lastName,
    setfirstName,
    firstName,
    mobile,
    setMobile,
    bigarr,
    addItems9,
    addItems10,
    images,
    properties1,
    addItems1,
    addItems2,
    addItems3,
    addItems4,
    addItems5,
    addItems6,
    addItems7,
    addItems8,
    bigarr,
  };
  return <AppContext.Provider value={list}>{children}</AppContext.Provider>;
};
