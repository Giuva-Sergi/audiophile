import styles from "./Main.module.css";

interface MainProps {
  children: React.ReactNode;
}
function Main({ children }: MainProps) {
  return <main className={styles.mainSection}>{children}</main>;
}

export default Main;
