'use client'
import { useState } from 'react';
import Image from "next/image";
import Barbearia from "/public/barbearia.png"
import styles from "./page.module.css";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Home() {


  const [modeDarkLight, setModeDarkLight] = useState(false);



  const AlternateMode = ()=>{
      setModeDarkLight(!modeDarkLight);
  }

  return (
    <div className={modeDarkLight ? styles.modo_dark : styles.modo_light}>
      <header className={styles.header}>
        <div>
          <Image src={Barbearia} className={styles.img_logo} />
          <button onClick={AlternateMode} className={styles.btn_mode}>{modeDarkLight ? <BsSun/> : <BsMoon/> }</button>
        </div>
      </header>
      <main>
        <section className={styles.secao_capa}></section>
        <section className={styles.secao_text}>
          <div className={styles.container_textos}>
            <h1>Bem-vindo a Barber Shop</h1>
            <h2>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</h2>
            <p className={styles.pg}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <p className={styles.assinatura}>S. Kelly</p>
          </div>
        </section>
      </main>
    </div>
  );
}



