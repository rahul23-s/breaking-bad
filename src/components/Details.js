import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { fetchQuotes } from "./api";

const Details = (details) => {
  const [quotes, setQuotes] = useState([]);
  const info = details.details;

  var author = info.name;
  author = author.split(" ")[0] + "+" + author.split(" ")[1];
  console.log(author);

  useEffect(() => {
    const getQuotes = async () => {
      const result = await fetchQuotes(author);

      setQuotes(result.data);
    };
    getQuotes();
    console.log(quotes);
  }, []);

  return (
    <div>
      <Container>
        <Content>
          <img src={info.img} alt={info.name} />
          <Data>
            <h1>{info.name}</h1>
            <Info>
              <p>DOB: {info.birthday}</p>
              <p>Occupation: {info.occupation[0]}</p>
              <p>Status: {info.status}</p>
              <p>Nickname: {info.nickname}</p>
              <p>Appeared In: Season {info.appearance}</p>
              <p>Actor: {info.portrayed}</p>
            </Info>
          </Data>
        </Content>
        <Quotes>
          <h1>Quotes by {info.name}</h1>
          {quotes.length !== 0 ? (
            quotes.map((quote) => (
              <Card key={quote.quote_id}>
                <h4>"{quote.quote}"</h4>
              </Card>
            ))
          ) : (
            <Card>No Quotes Found! &#128531;</Card>
          )}
        </Quotes>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Content = styled.div`
  width: 90%;
  height: fit-content;
  margin: 10px 0;
  background: #000214;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  padding-bottom: 40px;
  padding-left: 20px;

  img {
    height: 90vh;
    padding: 30px;
    object-fit: cover;
    /* border-radius: 100%; */
    width: 50%;
  }
  h1 {
    font-size: 50px;
    margin: 25px 0;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 80%;
      height: 75vh;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
      height: 60vh;
      padding: 20px;
      padding-left: 0;
    }
  }
`;

const Data = styled.div``;
const Info = styled.div``;

const Quotes = styled.div`
  width: 90%;
  height: fit-content;
  margin: 10px 0;
  padding-top: 20px;
  background: #000214;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: #ffffff;
  h1 {
    padding: 10px 15px;
    text-align: center;
  }
`;

const Card = styled.div`
  width: 90%;
  margin: 20px;
  height: 10vh;
  padding: 10px;
  color: #000214;
  background: #f1f1f1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default Details;
