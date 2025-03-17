import React, { useState } from "react";
import HeaderCard from "./header-card";
import ItemCard from "./item-card";

const MOC_DATA: ItemCard[] = [
  {
    icon: "1",
    text: "Скачать приложение",
    btns: [
      {
        text: "Скачать из Microsoft Store",
        onClick: () => {
          window.location.href = "https://yande.ru";
        },
      },
      {
        text: "Скачать .exe файл",
        onClick: () => {},
      },
    ],
  },
  {
    icon: "2",
    text: "Скачать приложение",
    btns: [
      {
        text: "Скачать из Microsoft Store",
        onClick: () => {
          window.location.href = "https://yande.ru";
        },
      },
      {
        text: "Скачать .exe файл",
        onClick: () => {},
      },
    ],
  },
];
export const VPNCard = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="flex-col">
      <HeaderCard isShow={isShow} setIsShow={setIsShow} />
      {MOC_DATA.map((item) => (
        <ItemCard card={item} isShow={isShow} key={item.text} />
      ))}
    </div>
  );
};
