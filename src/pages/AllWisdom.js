import React, {useEffect, useState } from 'react'
import { Layout, List } from 'antd'
import SingleW from './SingleW';
import axios from 'axios';


const {Content } = Layout

export default function AllWisdom() {
  
  const [searchTerm, setSearchTerm] = useState("")
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  console.log(searchTerm)
  console.log(searchTerm.includes('test'));


  useEffect(() => {
    async function getWisdom() {
      await axios.get('https://type.fit/api/quotes')
      .then((res) => {
        const responseData = res.data;

        setQuotes(responseData);
      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
      });
    }

    getWisdom();
  }, []);

  return (

    <Layout>
      <Content className="container">
      <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
            }}
      />

      
            {quotes.filter((val)=> {
              if (searchTerm == ""){
                return val
              } else
              {
                val = val.author;
                return val === searchTerm
              }
            }).map((val, key) => {
              return(
                <List>
                <List.Item>
                <SingleW
                  key={key}
                  text={`${val.text}`} 
                  author={`${val.author}`} 
                />
                </List.Item>
                </List>
              );
              

              })}
       
      </Content>
    </Layout>
  )
}

