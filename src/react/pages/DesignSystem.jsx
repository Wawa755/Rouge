import React from "react";
import {
  CheckoutButton,
  ConfirmPurchaseButton,
  LogInButton,
  SignUpButton,
  ContinueButton,
  MoreInfoButton,
} from "../components/buttons/RedButtons";

const DesignSystem = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Design System: Custom Red Buttons</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CheckoutButton />
        <ConfirmPurchaseButton />
        <LogInButton />
        <SignUpButton />
        <ContinueButton />
        <MoreInfoButton />
      </div>
    </div>
  );
};

export default DesignSystem;
