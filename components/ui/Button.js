import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  // This 'if' statement is to check whether we need to render a link button or a regular button.
  // This Button component is used for the EventItem and EventsSearch component.
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
