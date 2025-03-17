import { FC, JSX } from "react";

type ItemCard = {
  icon: string | JSX.Element;
  text: string;
  btns: { text: string; onClick: () => void }[];
};

interface ItemCardProps {
  card: ItemCard;
  isShow: boolean;
}

const style = {
  btn: "p-2 border-2 rounded-2xl border-[#289fd9] hover:not-focus:bg-[#289fd9] hover:text-white cursor-pointer transition text-[#289fd9]",
};
const ItemCard: FC<ItemCardProps> = ({ isShow, card }) => {
  const { icon, text, btns } = card;
  return (
    <div
      className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
        isShow ? "max-h-40" : "max-h-0"
      }`}
    >
      <div className={`flex p-6 bg-[#f5f5f5] `}>
        <div className="flex flex-1/3 items-center">
          <div className="flex items-center justify-center  bg-[#bdff1c] font-semibold w-[44px] h-[44px]  rounded-md">
            {icon}
          </div>
          <div className="p-3">{text}</div>
        </div>
        {btns.map((btn) => (
          <div className={`${style.btn} mr-5`} onClick={btn.onClick}>
            {btn.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
