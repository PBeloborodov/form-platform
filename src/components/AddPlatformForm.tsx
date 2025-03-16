import React from "react";
import { useForm } from "react-hook-form";

export const AddPlatformForm = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    // Здесь можно добавить логику для отправки данных на сервер
  };

  return (
    <div style={{ marginBottom: "100px", marginTop: "100px" }}>
      <h2 style={{ marginBottom: "10px" }}>Добавление платформы</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name-platform")}
          placeholder="Введите название платформы"
        />
        <input
          {...register("ver-platform")}
          placeholder="Версия, к примеру 'Windows 8.1 и новее'"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          Логотип <input type="file" {...register("logo-platform")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
