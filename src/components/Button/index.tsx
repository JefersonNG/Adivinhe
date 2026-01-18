import styles from "./styles.module.css";

type Props = React.ComponentProps<"button"> & {
  title: string;
};

function Button({ title, ...rest }: Props) {
  return (
    <button {...rest} className={styles.button}>
      {title}
    </button>
  );
}

export { Button };
