import React from "react";
import { Button } from "@mantine/core";
import "@/sass/components/buttons/_iconbuttons.scss";

/**
 * NOTE:
 * Originally, I imported the icons directly from the public folder.
 * However, that approach was causing issues and became overly complex.
 * I discovered a more modern practice by moving the icons into the
 * /src/assets/icons folder. Now, importing icons as modules is much easier
 * and integrates better with Vite's bundling and optimization.
 */

// Import icons as modules from /src/assets/icons
import addToBasketIcon from "@/assets/icons/icon_basket_active.svg";
import seeReviewsIcon from "@/assets/icons/icon_see_reviews.svg";
import filterIcon from "@/assets/icons/icon_filter.svg";
import leaveReviewIcon from "@/assets/icons/icon_pen.svg";
import repurchaseIcon from "@/assets/icons/icon_basket_active.svg";
import continueWithFacebookIcon from "@/assets/icons/icon_facebook.svg";
import continueWithGoogleIcon from "@/assets/icons/icon_google.svg";
import continueWithAppleIcon from "@/assets/icons/icon_apple.svg";

/**
 * AddToBasketIconButton
 *
 * A custom icon button for adding items to the basket.
 */
export function AddToBasketIconButton(props) {
  return (
    <Button
      classNames={{ root: "add-to-basket-icon-button" }}
      leftSection={
        <img
          src={addToBasketIcon}
          alt="Add to basket icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      Add to basket
    </Button>
  );
}

/**
 * SeeReviewsIconButton
 *
 * A custom icon button for viewing reviews.
 */
export function SeeReviewsIconButton(props) {
  return (
    <Button
      classNames={{ root: "see-reviews-icon-button" }}
      leftSection={
        <img
          src={seeReviewsIcon}
          alt="See reviews icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      See reviews
    </Button>
  );
}

/**
 * FilterIconButton
 *
 * A custom icon button for filtering items.
 */
export function FilterIconButton(props) {
  return (
    <Button
      classNames={{ root: "filter-icon-button" }}
      leftSection={
        <img
          src={filterIcon}
          alt="Filter icon"
          style={{ width: "25px", height: "25px" }}
        />
      }
      {...props}
    >
      Filter
    </Button>
  );
}

/**
 * LeaveAReviewIconButton
 *
 * A custom icon button for leaving a review.
 */
export function LeaveAReviewIconButton(props) {
  return (
    <Button
      classNames={{ root: "leave-a-review-icon-button" }}
      leftSection={
        <img
          src={leaveReviewIcon}
          alt="Leave a review icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      Leave a review
    </Button>
  );
}

/**
 * RepurchaseIconButton
 *
 * A custom icon button for repurchasing items.
 */
export function RepurchaseIconButton(props) {
  return (
    <Button
      classNames={{ root: "repurchase-icon-button" }}
      leftSection={
        <img
          src={repurchaseIcon}
          alt="Repurchase icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      Repurchase
    </Button>
  );
}

/**
 * ContinueWithFacebookIconButton
 *
 * A custom icon button for continuing with Facebook login.
 */
export function ContinueWithFacebookIconButton(props) {
  return (
    <Button
      classNames={{ root: "continue-with-facebook-icon-button" }}
      leftSection={
        <img
          src={continueWithFacebookIcon}
          alt="Continue with Facebook icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      Continue with Facebook
    </Button>
  );
}

/**
 * ContinueWithGoogleIconButton
 *
 * A custom icon button for continuing with Google login.
 */
export function ContinueWithGoogleIconButton(props) {
  return (
    <Button
      classNames={{ root: "continue-with-google-icon-button" }}
      leftSection={
        <img
          src={continueWithGoogleIcon}
          alt="Continue with Google icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      Continue with Google
    </Button>
  );
}

/**
 * ContinueWithAppleIconButton
 *
 * A custom icon button for continuing with Apple login.
 */
export function ContinueWithAppleIconButton(props) {
  return (
    <Button
      classNames={{ root: "continue-with-apple-icon-button" }}
      leftSection={
        <img
          src={continueWithAppleIcon}
          alt="Continue with Apple icon"
          style={{ width: "16px", height: "16px" }}
        />
      }
      {...props}
    >
      Continue with Apple
    </Button>
  );
}

/**
 * SeeMoreButton
 *
 * A custom button for "See more >" action.
 */
export function SeeMoreButton(props) {
  return (
    <Button classNames={{ root: "see-more-button" }} {...props}>
      See more &gt;
    </Button>
  );
}
