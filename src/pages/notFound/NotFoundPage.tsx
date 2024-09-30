import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Page Not Found</p>
      <Link to="/" className={styles.homeLink}>
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
