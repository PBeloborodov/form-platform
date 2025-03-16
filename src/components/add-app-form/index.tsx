import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./style.css";

export const AddAppForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Здесь можно добавить логику для отправки данных на сервер
  };

  return (
    <div className="wrap">
      <h2 className="header">Добавление приложения</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("name-app")} placeholder="Название приложения" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          Логотип <input type="file" {...register("logo-app")} />
        </div>
        <Controller
          name="select-app"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field}>
              <option value="">Выберите платформу</option>
              <option value="platform1">Выберите платформу1</option>
              <option value="platform2">Выберите платформу2</option>
              <option value="platform3">Выберите платформу3</option>
            </select>
          )}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
          }}
        >
          Рекомендуемое
          <input
            style={{ width: "auto", marginLeft: "10px" }}
            type="checkbox"
            {...register("recommend-app")}
          />
        </div>
        <div className="list">
          <h3>Скачка приложения</h3>
          <div className="list-num">
            <input {...register("step-num")} placeholder="Номер пункта" />
            <input {...register("step-text")} placeholder="Текст" />
            <input {...register("step-text-btn")} placeholder="Текст кнопки" />
            <input {...register("step-link")} placeholder="Ссылка" />
          </div>
          <h3>Импорт/копирование ключа</h3>
          <div className="list-num">
            <input {...register("step-num2")} placeholder="Номер пункта" />
            <input {...register("step-text2")} placeholder="Текст" />
            <input {...register("step-text-btn")} placeholder="Текст кнопки" />
            <input {...register("step-link")} placeholder="Ссылка" />
          </div>
          <h3>Видеоинструкция</h3>
          <div className="list-num">
            <input {...register("video-num")} placeholder="Ссылка на иконку" />
            <input {...register("video-text")} placeholder="Текст" />
            <input {...register("video-text-btn")} placeholder="Текст кнопки" />
            <input {...register("video-link")} placeholder="Ссылка на видео" />
          </div>
          <h3>Текстовая инструкция</h3>
          <div className="list-num">
            <input {...register("read-num")} placeholder="Ссылка на иконку" />
            <input {...register("read-text")} placeholder="Текст" />
            <input {...register("read-text-btn")} placeholder="Текст кнопки" />
            <input {...register("read-link")} placeholder="Ссылка на текст" />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
