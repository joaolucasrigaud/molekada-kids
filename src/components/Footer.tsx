import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Institucional</h3>
          <ul>
            <li>
              <Link href="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso">Termos de Uso</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Ajuda</h3>
          <ul>
            <li>
              <Link href="/perguntas-frequentes">Perguntas Frequentes</Link>
            </li>
            <li>
              <Link href="/trocas-e-devolucoes">Trocas e Devoluções</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Meus Pedidos</h3>
          <ul>
            <li>
              <Link href="/meus-pedidos">Meus Pedidos</Link>
            </li>
            <li>
              <Link href="/rastrear-pedido">Rastrear Pedido</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Newsletter</h3>
          <p>Receba nossas novidades e promoções!</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Molekada Kids. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
