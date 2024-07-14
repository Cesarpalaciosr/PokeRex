import styled from "styled-components";
import { colorstype, variantSizePadding } from "./constColorStyle";

const ButtonComponent = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "variant",
})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 0.3rem;
  padding: 0 ${(props) => variantSizePadding[props.size] || "1.1rem"};
  height: ${(props) =>
        props.size === "sm"
            ? "34px"
            : props.size === "md"
                ? "37px"
                : props.size === "lg"
                    ? "45px"
                    : "34px"};
  font-weight: 500;
  text-shadow:
    -0.5px -0.5px 0 #333,
    0.5px -0.5px 0 #333,
    -0.5px 0.5px 0 #333,
    0.5px 0.5px 0 #333;
  border: 1px solid transparent;
  background-color: ${(props) => colorstype[props.variant] || "#f8f9fa"};
  color: ${(props) =>
        props.variant === "light"
            ? "#ffffff"
            : props.variant === "dark"
                ? "#ffffff"
                : props.variant === "moves"
                    ? "#ffffff"
                    : props.variant === "locations"
                        ? "#ffffff"
                        : props.variant === "evolutions"
                            ? "#ffffff"
                            : props.variant === "redirection"
                                ? "#ffffff"
                                : props.variant === "test"
                                    ? "#ffffff"
                                    : "#212529"};
`;

const TypeLabel = styled.label`
  display: inline;
  font-size: 20px;
  font-weight: bold;
  font-family: "Pixelify Sans";
  text-transform: capitalize;
  font-optical-sizing: "auto";
  font-style: "normal";
  color: white;
  text-shadow: 1px 1px 2px black;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
`;

const InfoContainer = styled.div`
  padding-left: 7px;
  margin-top: 20px;
`;

const TypeLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-right: 15px;
  border: 3px solid #3333;
  width: 90px;
  background-color: ${(props) => colorstype[props.color || "fire"]};
`;

const LabelContainer = styled.div`
  width: 20px;
  margin-top:10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export { ButtonComponent, LabelContainer, InfoContainer, TypeLabel, TypeLabelContainer};
