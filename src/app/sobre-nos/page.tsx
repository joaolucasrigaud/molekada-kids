import React from "react";
import styles from "./page.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo à Molekada Kids! Somos uma loja dedicada a oferecer roupas
        infantis de alta qualidade, confortáveis e cheias de estilo para seus
        pequenos. Acreditamos que a moda infantil deve ser divertida, prática e
        durável, acompanhando o ritmo de crescimento e as aventuras diárias das
        crianças.
      </p>
      <p>
        Nossa missão é vestir com carinho e alegria, proporcionando peças que
        permitam que cada criança explore o mundo com liberdade e confiança.
        Trabalhamos com tecidos selecionados e designs pensados para o bem-estar
        dos nossos clientes mais especiais.
      </p>
      <p>
        Explore nossa coleção e descubra o que a Molekada Kids tem de melhor
        para o guarda-roupa dos seus filhos!
      </p>
    </div>
  );
}
