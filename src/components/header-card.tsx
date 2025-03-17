import { FC } from "react";
import ArrowDown from "../assets/arrow-down.svg";
interface HeaderCardProps {
  setIsShow: (v: boolean) => void;
  isShow: boolean;
}

const HeaderCard: FC<HeaderCardProps> = ({ setIsShow, isShow }) => {
  return (
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
        <ArrowDown />
      </div>
    </div>
  );
};

export default HeaderCard;
