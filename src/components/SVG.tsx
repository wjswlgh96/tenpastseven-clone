import { CSSProperties } from "react";

import Logo from "/public/Logo.svg";
import Search from "/public/Search.svg";
import User from "/public/User.svg";
import Basket from "/public/Basket.svg";

export type svgIcons = "logo" | "search" | "user" | "basket";

export default function CustomSVG({
  name,
  style,
}: {
  name: svgIcons;
  style?: CSSProperties | undefined;
}) {
  const returnSvg = () => {
    switch (name) {
      case "logo": {
        return <Logo style={style} />;
      }
      case "search": {
        return <Search style={style} />;
      }
      case "user": {
        return <User style={style} />;
      }
      case "basket": {
        return <Basket style={style} />;
      }

      default:
        return <h1>존재하지 않는 아이콘입니다.</h1>;
    }
  };

  return returnSvg();
}
