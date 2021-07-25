import React from "react";
import {
  HeaderImage,
  HeaderSubTitle,
  HeaderTitle,
  HeaderTitleWrapper,
  HeaderWrapper,
} from "organisms/Header/Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitleWrapper>
        <HeaderTitle
          initial={{ y: "-100%" }}
          transition={{ delay: 0.2 }}
          animate={{ y: 0 }}
        >
          DuduBTW
        </HeaderTitle>
        <HeaderSubTitle
          initial={{ y: "100%" }}
          transition={{ delay: 0.5 }}
          animate={{ y: 0 }}
        >
          Desenvolvedor frontend
        </HeaderSubTitle>
      </HeaderTitleWrapper>
    </HeaderWrapper>
  );
}
