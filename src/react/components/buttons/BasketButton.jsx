import React from "react";
import basketIcon from "@/assets/icons/icon_basket_active.svg";
import "@/sass/components/buttons/_basketbutton.scss";

/**
 * BasketButton
 *
 * A standalone component that displays a basket icon above the label "Basket".
 * The shape, background, and other styling are handled by the SCSS file.
 */
export function BasketButton() {
  return (
    <div className="basket-button">
      <img src={basketIcon} alt="Basket icon" className="basket-button__icon" />
      <span className="basket-button__label">Basket</span>
    </div>
  );
}
