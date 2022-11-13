import styles from "./page.module.scss";
import { OwlButton } from "tibui";

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>Tib<span>UI</span></h1>
      <OwlButton label="Tibu"/>
    </main>
  );
}
