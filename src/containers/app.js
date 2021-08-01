import React, { useEffect } from "react";
import CardList from "../components/cardList.js";
import SearchBox from "../components/searchBox";
import Scroll from "../components/scroll";
import "./app.css";
import ErrorBoundaries from "../components/errorBoundaries.js";
import { setSearchField, requestRobots } from "../Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToPorps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

const App = (props) => {
  useEffect(() => {
    // // runs after render method!
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     setState({ robots: users });
    //     console.log("length", users.length);
    //   });
    props.onRequestRobots();
  }, []);

  // const onSearchChange = (event) => {
  //   setState({
  //     robots: state.robots,
  //     searchField: event.target.value,
  //   });
  // };

  const filteredRobots = props.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  return props.isPending ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="tc f1">Robo Friends</h1>
      <SearchBox searchChange={props.onSearchChange} />
      <Scroll>
        <ErrorBoundaries>
          <CardList robots={filteredRobots} />
        </ErrorBoundaries>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToPorps)(App);
