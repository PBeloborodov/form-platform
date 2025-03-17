import React, { useState } from "react";
import HeaderCard from "./header-card";
import ItemCard from "./item-card";
import { VideoIcon } from "../assets/svg-componets/arrow-down copy";

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
    text: "Импортировать VPN в приложение",
    btns: [
      {
        text: "Импортировать",
        onClick: () => {
          // window.location.href = "https://yande.ru";
        },
      },
    ],
  },
  {
    icon: <VideoIcon />,
    text: "Видеоинструкция",
    btns: [
      {
        text: "Смотреть",
        onClick: () => {
          // window.location.href = "https://yande.ru";
        },
      },
    ],
  },
  {
    icon: <VideoIcon />,
    text: "Читать подробную инструкцию",
    btns: [
      {
        text: "Читать",
        onClick: () => {
          // window.location.href = "https://yande.ru";
        },
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
