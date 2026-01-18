import styles from "./styles.module.css";

type Props = React.ComponentProps<"input">;

function Input({ ...rest }: Props) {
  return <input type="text" className={styles.input} {...rest} />;
}

export { Input };
