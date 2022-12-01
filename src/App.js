import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [opt, setOpt] = useState("0");
  const changeOpt = (e) => {
    //console.log(e.target.value);
    // setOpt(opt.concat(e.target.value));
    switch (e.target.value) {
      case "AC":
        setOpt("0");
        break;
      case "DEL":
        if (opt.length === 1) {
          setOpt("0");
        } else if (opt !== "0") {
          setOpt(opt.slice(0, opt.length - 1));
        }
        break;
      case "=":
        setOpt(eval(opt).toString());
        break;

      default:
        if (
          opt === "0" &&
          parseInt(e.target.value) >= 1 &&
          parseInt(e.target.value) <= 9
        ) {
          setOpt(e.target.value);
        } else {
          setOpt(opt.concat(e.target.value));
        }

        if (opt.endsWith("+") || opt.endsWith("-")) {
          if (
            e.target.value === "+" ||
            e.target.value === "-" ||
            e.target.value === "*" ||
            e.target.value === "/" ||
            e.target.value === "%"
          ) {
            setOpt(opt.slice(0, opt.length - 1) + e.target.value);
          }
        }

        break;
    }
  };

  return (
    <div className="App">
    <h1>Calculator!</h1>
      <div className="calc">
        <div className="calc_opt">{opt}</div>
        <div className="calc_btn_grp">
          <button value={"AC"} onClick={(e) => changeOpt(e)}>
            AC
          </button>
          <button value={"DEL"} onClick={(e) => changeOpt(e)}>
            DEL
          </button>
          <button value={"%"} onClick={(e) => changeOpt(e)}>
            %
          </button>
          <button value={"/"} onClick={(e) => changeOpt(e)}>
            /
          </button>
          <button value={"7"} onClick={(e) => changeOpt(e)}>
            7
          </button>
          <button value={"8"} onClick={(e) => changeOpt(e)}>
            8
          </button>
          <button value={"9"} onClick={(e) => changeOpt(e)}>
            9
          </button>
          <button value={"*"} onClick={(e) => changeOpt(e)}>
            *
          </button>
          <button value={"4"} onClick={(e) => changeOpt(e)}>
            4
          </button>
          <button value={"5"} onClick={(e) => changeOpt(e)}>
            5
          </button>
          <button value={"6"} onClick={(e) => changeOpt(e)}>
            6
          </button>
          <button value={"-"} onClick={(e) => changeOpt(e)}>
            -
          </button>
          <button value={"1"} onClick={(e) => changeOpt(e)}>
            1
          </button>
          <button value={"2"} onClick={(e) => changeOpt(e)}>
            2
          </button>
          <button value={"3"} onClick={(e) => changeOpt(e)}>
            3
          </button>
          <button value={"+"} onClick={(e) => changeOpt(e)}>
            +
          </button>
          <button value={"0"} onClick={(e) => changeOpt(e)}>
            0
          </button>
          <button value={"00"} onClick={(e) => changeOpt(e)}>
            00
          </button>
          <button value={"."} onClick={(e) => changeOpt(e)}>
            .
          </button>
          <button value={"="} onClick={(e) => changeOpt(e)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
