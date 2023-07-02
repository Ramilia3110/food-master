import "./styles.css";

type ButtonProps = {
  children: String;
};

export default function Button({ children }: ButtonProps) {
  return <div className="btn">{children}</div>;
}
