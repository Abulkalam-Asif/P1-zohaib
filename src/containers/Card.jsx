import React from "react";

const Card = ({
  children,
  title,
  className,
  titleClass,
  specialPadding,
  id,
}) => {
  return (
    <>
      <div
        id={id}
        className={`${specialPadding || "p-5"} bg-white rounded-lg ${
          !specialPadding && "sm:p-4"
        } ${className}`}>
        <h1 className={`text-xl font-bold sm:text-center ${titleClass}`}>
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};

Card.defaultProps = {
  className: "",
  titleClass: "",
};

export default Card;
