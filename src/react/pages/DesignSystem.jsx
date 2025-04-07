import React from "react";
import { MantineProvider, Group } from "@mantine/core";
import {
  CheckoutButton,
  ConfirmPurchaseButton,
  LogInButton,
  SignUpButton,
  ContinueButton,
  MoreInfoButton,
} from "../components/buttons/RedButtons";
import {
  AddToBasketIconButton,
  SeeReviewsIconButton,
  FilterIconButton,
  LeaveAReviewIconButton,
  RepurchaseIconButton,
  ContinueWithFacebookIconButton,
  ContinueWithGoogleIconButton,
  ContinueWithAppleIconButton,
} from "../components/buttons/IconButtons";

import { BasketButton } from "../components/buttons/BasketButton";

const DesignSystem = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ padding: "2rem" }}>
        <h1>Design System</h1>

        <h2>Text Buttons</h2>
        <Group direction="column" spacing="md">
          <CheckoutButton />
          <ConfirmPurchaseButton />
          <LogInButton />
          <SignUpButton />
          <ContinueButton />
          <MoreInfoButton />
        </Group>

        <h2>Icon Buttons</h2>
        <Group direction="column" spacing="md" mt="xl">
          <AddToBasketIconButton />
          <SeeReviewsIconButton />
          <FilterIconButton />
          <LeaveAReviewIconButton />
          <RepurchaseIconButton />
          <ContinueWithFacebookIconButton />
          <ContinueWithGoogleIconButton />
          <ContinueWithAppleIconButton />
        </Group>

        <h2>Standalone Basket Button</h2>
        <Group mt="xl">
          <BasketButton />
        </Group>
      </div>
    </MantineProvider>
  );
};

export default DesignSystem;
