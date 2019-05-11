import React, { Component } from 'react';
import Search from './Search';
import '../App.css';
import NamesList from './NamesList';
import Credit from './Credit';
import Header from './Header';
import FighterDetails from './FighterDetails';
import HomeDescription from './HomeDescription';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div className="full-width no-header-footer">
            <Route
              exact path='/'
              render={() => <HomeDescription />}
            />
            <Route
              path='/fighters/:id/:name'
              render={(props) => <FighterDetails {...props}
                data={Object.keys(this.props.data).map(i => this.props.data[i])} />}
            />
          </div>
        </BrowserRouter>
        <div className='container'>
          <BrowserRouter>
            <div>
              <Route
                exact path='/'
                render={() => <Search
                  filterText={this.state.filterText}
                  filterUpdate={this.filterUpdate.bind(this)} />}
              />
              <Route
                exact path='/'
                render={() => <NamesList
                  data={this.props.data}
                  filterText={this.state.filterText} />}
              />

            </div>
          </BrowserRouter>
          <Credit />
        </div>
      </div>
    )
  }
}

// in return before fighterdetails browserrouter
// <Search
//   filterText={this.state.filterText}
//   filterUpdate={this.filterUpdate.bind(this)}
// />
// <NamesList
//   data={this.props.data}
//   filterText={this.state.filterText}
// />

export default App;
