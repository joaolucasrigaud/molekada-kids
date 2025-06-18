import React from "react";
import styles from "./page.module.css";

export default function ExchangesReturnsPage() {
  return (
    <div className={styles.container}>
      <h1>Trocas e Devoluções</h1>
      <p>
        Na Molekada Kids, queremos que você e seus pequenos fiquem completamente
        satisfeitos com suas compras. Caso precise trocar ou devolver um
        produto, siga as orientações abaixo:
      </p>

      <h2>Condições para Troca ou Devolução:</h2>
      <ul>
        <li>
          O prazo para solicitação de troca ou devolução é de 7 (sete) dias
          corridos a partir da data de recebimento do produto.
        </li>
        <li>
          O produto deve estar em perfeito estado, sem sinais de uso, lavagem ou
          qualquer alteração.
        </li>
        <li>
          Deve estar com a etiqueta original afixada e na embalagem original.
        </li>
        <li>A nota fiscal ou comprovante de compra deve ser apresentado.</li>
      </ul>

      <h2>Como Solicitar:</h2>
      <ol>
        <li>
          Entre em contato com nosso Serviço de Atendimento ao Cliente (SAC)
          através do e-mail [seu-email@exemplo.com] ou telefone [seu-telefone].
        </li>
        <li>
          Informe o número do pedido, o(s) produto(s) que deseja trocar/devolver
          e o motivo.
        </li>
        <li>
          Você receberá as instruções para o envio do produto de volta para
          nossa central.
        </li>
      </ol>

      <h2>Opções de Troca:</h2>
      <ul>
        <li>
          Troca por outro produto de igual valor, sujeito à disponibilidade de
          estoque.
        </li>
        <li>
          Vale-compra no valor do produto para ser utilizado em futuras compras
          em nosso site.
        </li>
      </ul>

      <h2>Reembolso (para devoluções):</h2>
      <p>
        O reembolso será processado após o recebimento e análise do produto em
        nosso centro de distribuição. O método de reembolso dependerá da forma
        de pagamento original:
      </p>
      <ul>
        <li>
          <strong>Cartão de Crédito:</strong> Estorno na fatura do cartão, que
          pode ocorrer em até duas faturas subsequentes.
        </li>
        <li>
          <strong>Boleto Bancário/Pix:</strong> Crédito em conta corrente do
          titular da compra em até 10 dias úteis.
        </li>
      </ul>

      <p>Em caso de dúvidas, não hesite em nos contatar!</p>
    </div>
  );
}
