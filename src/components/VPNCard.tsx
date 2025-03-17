import React, { useState } from "react";

const style = {
  btn: "p-2 border-2 rounded-2xl border-[#289fd9] hover:not-focus:bg-[#289fd9] hover:text-white cursor-pointer transition text-[#289fd9]",
};

export const VPNCard = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="flex-col">
      <div className="flex bg-[#efefef] w-2xl h-auto rounded-sm p-5 items-center">
        <div className="flex flex-1/2">
          <div>icon</div>
          <div>
            <div className="font-semibold">Hiddify Proxy & VPN</div>
            <div>Windows 8.1 и новее</div>
          </div>
        </div>
        <div>
          <div className="rounded-4xl bg-[#bdff1c] pl-2 pr-2 text-[10px] font-bold  shadow-#bdff1c">
            Рекомендуемое
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          arrow
        </div>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isShow ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className={`flex p-6 bg-[#f5f5f5] `}>
          <div className="flex flex-1/3 items-center">
            <div className="flex items-center justify-center  bg-[#bdff1c] font-semibold w-[44px] h-[44px]  rounded-md">
              1
            </div>
            <div className="p-3">Скачать приложение</div>
          </div>
          <div
            className={`${style.btn} mr-5`}
            onClick={() => {
              window.location.href = "https://yande.ru";
            }}
          >
            Скачать из Microsoft Store
          </div>
          <div className={style.btn} onClick={() => {}}>
            Скачать .exe файл
          </div>
        </div>
      </div>
    </div>
  );
};
