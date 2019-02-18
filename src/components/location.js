import style from "./all.module.css";
import React from "react";
export default () => (
  <div className={style.map}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.324129905506!2d30.50369231524211!3d50.47230927947835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce1282004e2d%3A0x9edbff00505c2d30!2zNTYvNjNBLCDQstGD0LvQuNGG0Y8g0JzQtdC20LjQs9GW0YDRgdGM0LrQsCwgNTYvNjPQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1550117020193"
      allowFullScreen
    />
  </div>
);
