import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import { fetchData } from "./components/api";

const App = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 12;
  const visited = pageNumber * perPage;
  const display = data.slice(visited, visited + perPage);
  const pageCount = Math.ceil(data.length / perPage);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(text);
      setData(result.data);
    };
    getData();
  }, [text, pageNumber]);

  const getText = (text) => {
    setText(text);
  };

  const getDetails = (details) => {
    setDetails(details);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Router>
        <Header getText={getText} />
        <Switch>
          <Route exact path="/">
            <Home display={display} getDetails={getDetails} />
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Route>
          <Route path="/detail/:id">
            <Details details={details} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
