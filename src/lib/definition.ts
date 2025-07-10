import React from "react";

export type IconLinkType = {
  text?: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
};

export type FeatureCardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export type PrimaryButtonType = {
  text: string;
  href: string;
  className?: string
}