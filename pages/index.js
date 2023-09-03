import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [operator, setOperator] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input value={inputValue} placeholder="0" />
        <div>
          <button onClick={() => setInputValue("")} className="gray">
            CE
          </button>
          <button onClick={() => setInputValue("")} className="gray">
            C
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current.substring(0, current.length - 1);
              })
            }
            className="backspace gray"
          >
            ⌫
          </button>
          <button
            onClick={() => {
              if (inputValue && !operator) {
                setValue1(inputValue);
                setInputValue("");
                setOperator("divide");
              } else if (inputValue && operator) {
                setValue2(inputValue);
                setInputValue("");
              }
            }}
            className="green"
          >
            &divide;
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "7";
              })
            }
            className="gray"
          >
            7
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "8";
              })
            }
            className="gray"
          >
            8
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "9";
              })
            }
            className="gray"
          >
            9
          </button>
          <button className="green">x</button>
        </div>
        <div>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "4";
              })
            }
            className="gray"
          >
            4
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "5";
              })
            }
            className="gray"
          >
            5
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "6";
              })
            }
            className="gray"
          >
            6
          </button>
          <button className="green">-</button>
        </div>
        <div>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "1";
              })
            }
            className="gray"
          >
            1
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "2";
              })
            }
            className="gray"
          >
            2
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "3";
              })
            }
            className="gray"
          >
            3
          </button>
          <button className="green">+</button>
        </div>
        <div>
          <button
            onClick={() =>
              setInputValue((current) => {
                if (current.charAt(0) === "-") {
                  return current.substring(1);
                } else {
                  return "-" + current;
                }
              })
            }
            className="gray"
          >
            +/-
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + "0";
              })
            }
            className="gray"
          >
            0
          </button>
          <button
            onClick={() =>
              setInputValue((current) => {
                return current + ".";
              })
            }
            className="gray"
          >
            .
          </button>
          <button className="green">=</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
