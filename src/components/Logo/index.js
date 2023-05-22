import React from "react";

import logoImgSrc from "../../assets/logo.svg";

import { LogoImage } from "./Logo.styles";

export default function Logo() {
	return <LogoImage alt="company logo" src={logoImgSrc} />;
}
