import Container from "../Container";
import CompanyInfo from "./CompanyInfo";
import styles from "./Footer.module.css";
import FooterNavbar from "./FooterNavbar";
function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterNavbar />
        <CompanyInfo />
      </Container>
    </footer>
  );
}

export default Footer;
