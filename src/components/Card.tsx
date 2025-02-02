import React, { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant?: CardVariant;
  children?: React.ReactNode;
  onClick: (num: number) => void
}

// const Card = ({ width, height, children }: CardProps) => {
// const Card: React.FC<CardProps> = ({ width, height, children }) => {
const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {

  const [state, setState] = useState(0)

  return (
    <div
      style={{
        width,
        height,
        background: variant === CardVariant.primary ? "lightgray" : "",
        border: variant === CardVariant.outlined ? "1px solid red" : "none",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
