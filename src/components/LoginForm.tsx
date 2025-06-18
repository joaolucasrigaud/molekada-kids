"use client";

import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Chrome, Facebook } from "lucide-react";

const LoginForm: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }
      // Lógica de registro
      alert(`Registrando com ${email} e senha.`);
    } else {
      // Lógica de login
      alert(`Logando com ${email} e senha.`);
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2>{isRegistering ? "Criar Conta" : "Entrar"}</h2>

      <div className={styles.socialLogin}>
        <button className={styles.socialButton}>
          {/* CORRIGIDO AQUI de Google para Chrome */}
          <Chrome size={20} /> Entrar com Google
        </button>
        <button className={styles.socialButton}>
          <Facebook size={20} /> Entrar com Facebook
        </button>
      </div>

      <div className={styles.divider}>OU</div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isRegistering && (
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          {isRegistering ? "Registrar" : "Entrar"}
        </button>
      </form>

      <button
        className={styles.toggleFormButton}
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? "Já tem uma conta? Entrar"
          : "Não tem uma conta? Criar uma"}
      </button>
    </div>
  );
};

export default LoginForm;
