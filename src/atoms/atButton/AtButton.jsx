import styled from "styled-components";
import PropTypes from 'prop-types';

const AtButton =  ({type, variant, className, size, id, onClick, children}) => {
    return (
            <ButtonComponent 
                type={type ? type : "button"} 
                variant={variant} 
                className={className ? `btn-component ${className}`: "btn-component"}
                id={id}
                onClick = {onClick}
                size={size ? size : "sm"}
            >
                {children}
            </ButtonComponent>
    )
}

AtButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(["primary","light", "dark","moves", "locations", "evolutions", "redirection","test",]),
    className: PropTypes.string,
    size: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};



const ButtonComponent = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'variant',
})`
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    text-decoration: none;
                    vertical-align: middle;
                    cursor: pointer;
                    user-select:none;
                    border-radius: 0.3rem;
                    padding: 0 
                    ${(props) => 
                        props.size === "sm" 
                        ? "1.1rem" : props.size === "md" 
                        ? "1.4rem" : props.size === "lg" 
                        ? "1.6rem" : "1.1rem"};
                    height: ${(props) => props.size === "sm" 
                        ? "34px" : props.size === "md" 
                        ? "37px" : props.size === "lg" 
                        ? "45px" : "34px"};
                    font-weight: 500;
                    border: 1px solid transparent;
                    background-color: ${(props) => props.variant === "light" ? "#f8f9fa" 
                    : props.variant === "dark" ? "#212529"
                    : props.variant === "moves" ? "#0d6efd"
                    : props.variant === "locations" ? "#6c757d"
                    : props.variant === "redirection" ? "transparent"
                    : props.variant === "test" ? "#0dcaf0" :"#f8f9fa"
                    };
                    color: ${(props) => props.variant=== "light" ? "#212529" 
                    : props.variant === "dark" ? "#ffffff"
                    : props.variant === "moves" ? "#ffffff"
                    : props.variant === "locations" ? "#ffffff"
                    : props.variant === "evolutions" ? "#456541"
                    : props.variant === "redirection" ? "ffffff"
                    : props.variant === "test" ? "#ffffff" :"#212529"
                    };
                `;

export default AtButton;