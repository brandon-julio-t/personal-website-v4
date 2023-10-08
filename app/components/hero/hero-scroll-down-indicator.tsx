"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useOnWindowScroll, useTimeoutWhen } from "rooks";

export default function HeroScrollDownIndicator() {
  const showScrollDownIndicatorTimeout = 3500;
  const [showScrollDownIndicator, setShowScrollDownIndicator] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useTimeoutWhen(
    () => setShowScrollDownIndicator(true),
    showScrollDownIndicatorTimeout,
    !hasScrolled,
  );

  useOnWindowScroll(() => {
    setHasScrolled(true);
    setShowScrollDownIndicator(false);
  }, !hasScrolled);

  return (
    <FontAwesomeIcon
      icon={faChevronDown as IconProp}
      className={`absolute bottom-0 mx-auto block h-6 transform-gpu transition-all duration-300 ${
        showScrollDownIndicator
          ? "translate-y-0 opacity-100"
          : "-translate-y-16 opacity-0"
      }`}
      size="2x"
    />
  );
}
