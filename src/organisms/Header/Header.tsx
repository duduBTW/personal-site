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
        <HeaderTitle>DuduBTW</HeaderTitle>
        <HeaderSubTitle>Desenvolvedor frontend</HeaderSubTitle>
      </HeaderTitleWrapper>
      <HeaderImage src="/skillks.svg" />
    </HeaderWrapper>
  );
}
