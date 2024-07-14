import PropTypes from "prop-types";
import {ButtonComponent} from "../../../utils/TagsStyledComponent";

const AtButton = ({
  type,
  variant,
  className,
  size,
  id,
  onClick,
  children,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      size={size ? size : "sm"}
    >
      {children}
    </ButtonComponent>
  );
};

AtButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary",
    "light",
    "dark",
    "moves",
    "locations",
    "evolutions",
    "redirection",
    "test",
  ]),
  className: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default AtButton;