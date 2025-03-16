import React from "react";

export const AppDisplay = () => {
  return (
    <div className="tab-platform tab-platform-active">
      <div className="app-thumbnail">
        <div className="app-arrow">
          <span></span>
        </div>
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9b/8d/cb/9b8dcb5a-2922-0412-d4c4-3cc2c286da04/AppIcon-0-0-1x_U007epad-0-85-220.png/230x0w.webp"
          alt=""
        />
        <div>
          <span className="app-name">
            Hiddify Proxy &amp; VPN
            <span className="desc">Windows 8.1 и новее</span>
          </span>
        </div>
        <div className="recomend">Рекомендуемое</div>
      </div>
      <div className="steps">
        <div className="platform-box">
          <div className="icon-box">1</div>
          <div className="platform-text">Скачать приложение</div>
          <a
            className="modal-info"
            href="https://apps.microsoft.com/detail/9pdfnl3qv2s5?hl=ru-RU&amp;gl=RU"
            target="_blank"
          >
            Скачать из Microsoft Store
          </a>
          <a
            href="https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Windows-Setup-x64.exe"
            className="modal-info"
            target="_blank"
          >
            Скачать .exe файл
          </a>
        </div>
      </div>
      <hr />
      <a
        id="confirmLink"
        href="https://install.opengate.click/hiddify.php?subscription_url=https://get.opengate.click/sub/Z3Jlc2huaWssMTc0MjEwMDk1NAVw-BwEvYr9"
        className="steps"
        target="_blank"
      >
        <div className="platform-box">
          <div className="icon-box">2</div>
          <div className="platform-text">Импортировать VPN в приложение</div>
          <div className="btn-download">Импортировать</div>
        </div>
      </a>
      <hr />
      <div className="steps">
        <div className="platform-box">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
            >
              <path
                d="M16 21.6667H8.00004M1.33337 13.4003V5.93368C1.33337 4.4402 1.33337 3.69291 1.62402 3.12248C1.87969 2.62071 2.28734 2.21306 2.7891 1.9574C3.35953 1.66675 4.10683 1.66675 5.6003 1.66675H18.4003C19.8938 1.66675 20.6395 1.66675 21.2099 1.9574C21.7117 2.21306 22.1207 2.62071 22.3763 3.12248C22.6667 3.69235 22.6667 4.43874 22.6667 5.9293V13.4042C22.6667 14.8948 22.6667 15.6401 22.3763 16.2099C22.1207 16.7117 21.7117 17.1207 21.2099 17.3764C20.64 17.6667 19.8947 17.6667 18.4042 17.6667H5.59592C4.10537 17.6667 3.35898 17.6667 2.7891 17.3764C2.28734 17.1207 1.87969 16.7117 1.62402 16.2099C1.33337 15.6395 1.33337 14.8938 1.33337 13.4003ZM15.3334 9.66675L9.33337 5.66675V13.6667L15.3334 9.66675Z"
                stroke="#13171A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="platform-text">Видеоинструкция</div>
          <a
            className="modal-video"
            data-url="https://player.vimeo.com/video/1042460267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          >
            Смотреть
          </a>
        </div>
      </div>
      <div className="steps">
        <div className="platform-box">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z" />
            </svg>
          </div>
          <div className="platform-text">Читать подробную инструкцию</div>
          <a
            href="https://ogate.gitbook.io/docs/ustanovka-i-nastroika/windows-or-nastroika-vpn/hiddify-or-ustanovka-na-windows"
            target="_blank"
          >
            Читать
          </a>
        </div>
      </div>
    </div>
  );
};
