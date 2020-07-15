import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreateSudoku from '../containers/CreateSudoku';
import ListSudoku from '../containers/ListSudoku';

class SudokuNavigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create-sudoku">Create sudoku</Link>
              </li>
              <li>
                <Link to="/list-sudoku">List sudoku's</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/create-sudoku">
              <CreateSudoku />
            </Route>
            <Route path="/list-sudoku">
              <ListSudoku />
            </Route>
            <Route path="/">
              {/* <Home /> */}
            </Route>
          </Switch>
        </div>

      </Router>
    )
  }


}

export default SudokuNavigation