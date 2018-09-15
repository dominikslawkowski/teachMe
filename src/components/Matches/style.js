import styled from "styled-components";

export const MatchesWrapper = styled.div`
  text-align: center;
  width: 90vw;
  /* height: 100vh;  */
  background-color: #999;
  box-sizing:border-box;
  margin: auto;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.38);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.38);

  .tabelaBody {
    width: 100%;
    text-align: center;
    background-color: #999;
  }

  .line {
    text-align: center;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
    width: 100%;
    background-color: #999;
  }

  .line: hover {
    background-color: #ccc;
  }

  .line td {
    padding: 5px;
    font-size: 26px;
    padding: auto;
    align-items: center;
  }

  .line td img {
    width: 75%;
    border-radius: 50%;
    -webkit-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.38);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.38);
  }

  .line .slider {
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px #rgba(0, 0, 0, 0.38) solid ;
    grid-gap: 10px;
    /* display: none; */
    background-color: #888;
  }

  .line .slider div {
    text-align: left;
    padding: 10px;
    box-sizing:border-box;
  }

.tagi {
  background-color: #eee;
    border-radius: 5px;

}
  .czat {
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid #rgba(0, 0, 0, 0.38);
    background-color: #eee;
    border-radius: 5px;
  }

  .wychodzaca {
    justify-self: center;
    width: fit-content;
    margin: 2px;
    justify-self: flex-end;
    break: both;  
  }

  .przychodzaca {

    justify-self: flex-start;
    width: fit-content;
    margin: 2px;
  }

  .wpisywanie {
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-gap: 2px;
  }

  .wyslij {
    height: fit-content;
    margin-top: 12px;
  }

  .wpisz {
    margin: 0
  }

   .topline {
    text-align: center;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
  }

  .imie {
    text-align: left  ;
    padding-top: 1999990px;
    letter-spacing: 2px;  
  }

    .wiek {
    text-align: center;

  }

  .tagsTitle {
    font-size: 20px;

  }
`;
