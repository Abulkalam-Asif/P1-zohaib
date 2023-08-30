import React from "react";
import { LinkButton } from "../components";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const Share = () => {
  return (
    <>
      <div className="flex justify-start lg:justify-center">
        <LinkButton
          text="Udostępnij"
          icon={window.innerWidth > 1024 ? faFacebook : faShareNodes}
          textSize="sm"
          type="lightBlueFilled"
        />
      </div>
    </>
  );
};

export default Share;
