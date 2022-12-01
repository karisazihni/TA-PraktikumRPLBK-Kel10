import { useEffect, useState } from "react";
import axios from 'axios';

import '../styles.css';

export default function Home() {
  const [advice, setAdvice] = useState([]);
  console.log(advice);


  useEffect(() => {
    async function getUsers() {
      await axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const responseData = res.data.slip;

        setAdvice(responseData);
      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
      });
    }

    getUsers();
  }, []);

  const openDialog = () => {
    async function getNewAdvice() {
      await axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const responseData = res.data.slip;

        setAdvice(responseData);
      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
      });
    }

    getNewAdvice();
  };

    return (
      <div className="home">
        <div className="card">
          <h1 className="heading">{advice.advice}</h1>
          <button className="button" onClick={openDialog}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  
}
