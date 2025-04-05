import React from "react";
import { Button } from "@mantine/core";
import "@/sass/components/buttons/_redbuttons.scss";

/**
 * CheckoutButton
 *
 * This is our custom Check-out button. We’re using Mantine's <Button> component
 * and injecting our own class ('checkout-button') into its internal .mantine-Button-root.
 *
 * FYI: Mantine styles its components with Emotion and CSS modules, so using just the
 * className prop wouldn’t let us override things like padding, color, or hover effects.
 */
export function CheckoutButton(props) {
  return (
    <Button classNames={{ root: "checkout-button" }} {...props}>
      Check-out
    </Button>
  );
}

/**
 * ConfirmPurchaseButton
 *
 * This button is for confirming a purchase. We inject our custom class
 * 'confirm-purchase-button' so we can have full control over its dimensions,
 * border-radius, and hover color.
 *
 * Basically, it gives us the flexibility to style it exactly how we need.
 */
export function ConfirmPurchaseButton(props) {
  return (
    <Button classNames={{ root: "confirm-purchase-button" }} {...props}>
      Confirm Purchase
    </Button>
  );
}

/**
 * LogInButton
 *
 * This button lets users log in.
 * We’re using the 'log-in-button' class to apply our custom SCSS so that we can
 * override Mantine's default styles (like padding, color, and hover effects) with our own.
 */
export function LogInButton(props) {
  return (
    <Button classNames={{ root: "log-in-button" }} {...props}>
      Log in
    </Button>
  );
}

/**
 * SignUpButton
 *
 * This is our Sign Up button.
 * It’s styled with the 'sign-up-button' class so we can override things like
 * the font size, background, and border radius in a neat, conflict-free way.
 */
export function SignUpButton(props) {
  return (
    <Button classNames={{ root: "sign-up-button" }} {...props}>
      Sign up
    </Button>
  );
}

/**
 * ContinueButton
 *
 * This Continue button uses the custom class 'continue-button' to take control over
 * the button’s layout—like setting a fixed width, removing default borders, and tweaking the color.
 */
export function ContinueButton(props) {
  return (
    <Button classNames={{ root: "continue-button" }} {...props}>
      Continue
    </Button>
  );
}

/**
 * MoreInfoButton
 *
 * This button displays "More info" and is styled using the custom class 'more-info-button'.
 * It allows us to apply our own custom styles without interference from Mantine's default styles.
 */
export function MoreInfoButton(props) {
  return (
    <Button classNames={{ root: "more-info-button" }} {...props}>
      More info
    </Button>
  );
}
