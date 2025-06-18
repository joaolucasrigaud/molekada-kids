import React from "react";
import styles from "../sobre-nos/page.module.css"; // Reusing the same CSS

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <h1>Perguntas Frequentes</h1>

      <h2>1. Como faço para comprar na Molekada Kids?</h2>
      <p>
        É muito simples! Navegue pelo nosso site, escolha os produtos que
        deseja, adicione-os ao carrinho e siga para o checkout. Lá, você
        preencherá seus dados de entrega e pagamento para finalizar a compra.
      </p>

      <h2>2. Quais são as formas de pagamento aceitas?</h2>
      <p>
        Aceitamos cartões de crédito (Visa, MasterCard, Elo, American Express),
        boleto bancário e Pix.
      </p>

      <h2>3. Qual o prazo de entrega?</h2>
      <p>
        O prazo de entrega varia de acordo com a sua localização e a modalidade
        de frete escolhida. Você pode simular o prazo e o valor do frete na
        página do produto ou no carrinho de compras, informando seu CEP.
      </p>

      <h2>4. Posso trocar ou devolver um produto?</h2>
      <p>
        Sim, a primeira troca é grátis! Você pode solicitar a troca ou devolução
        em até 7 dias corridos após o recebimento do produto, desde que ele
        esteja em perfeito estado e com a etiqueta original. Consulte nossa
        política completa de Trocas e Devoluções para mais detalhes.
      </p>

      <h2>5. Como faço para rastrear meu pedido?</h2>
      <p>
        Assim que seu pedido for despachado, você receberá um e-mail com o
        código de rastreamento e um link para acompanhar a entrega. Você também
        pode rastrear seu pedido na seção "Meus Pedidos" em nosso site.
      </p>

      <h2>6. Os produtos são originais?</h2>
      <p>
        Sim, todos os produtos vendidos na Molekada Kids são originais e de alta
        qualidade, selecionados com muito carinho para seus filhos.
      </p>

      <h2>7. Como entro em contato com o atendimento ao cliente?</h2>
      <p>
        Você pode entrar em contato conosco através do e-mail
        [seu-email@exemplo.com] ou pelo telefone [seu-telefone] de segunda a
        sexta-feira, das 9h às 18h.
      </p>
    </div>
  );
}
