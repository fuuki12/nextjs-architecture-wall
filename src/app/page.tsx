import { TodoContainer } from "@/features/todo/components/TodoContainer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Next.js アーキテクチャ壁打ち</h1>
          <p className={styles.description}>
            コンポーネント設計パターンの比較と検討
          </p>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featureベース設計サンプル</h2>
          <div className={styles.card}>
            <TodoContainer />
          </div>
        </section>
      </div>
    </div>
  );
}
