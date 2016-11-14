import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getFoodTrucks } from '../actions/foodTruck'
import Geosuggest from 'react-geosuggest'

// components

class Home extends Component {

  componentWillMount () {
    this.props.getFoodTrucks()
  }

  onSuggestSelect (suggest) {
    console.log(suggest)
  }

  render () {
    return (
      <div style={{width: '90%', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center'}}>Food Finder</h1>
        <div className='search_container'>
          <Geosuggest
            placeholder='Location'
            onSuggestSelect={this.onSuggestSelect}
          />
          <i className='material-icons'>search</i>
        </div>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

Home.propTypes = {
  foodTruck: object,
  getFoodTrucks: func
}

const mapStateToProps = (state) => ({foodTruck: state.foodTruck})

export default connect(mapStateToProps, { getFoodTrucks })(Home)
