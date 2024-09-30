import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import iconArrow from "/assets/shared/desktop/icon-arrow-right.svg";

interface ButtonProps {
  path?: string;
  text?: string;
  type: "dense" | "outline" | "transparent" | "menu";
  functionHandler?: () => void;
}

function Button({ path, text, type, functionHandler }: ButtonProps) {
  const className = `${styles["btn"]} ${styles[`btn-${type}`]}`;

  if (path)
    return (
      <Link to={path} className={className} onClick={functionHandler}>
        {text}
        {type === "transparent" && (
          <img src={iconArrow} alt="icon-arrow-right" />
        )}
      </Link>
    );

  return (
    <button
      {...(type === "menu" && { id: "menu-toggle-button" })}
      className={className}
      onClick={functionHandler}
    >
      {text} {type === "transparent" && <img src={iconArrow} />}
    </button>
  );
}

export default Button;
