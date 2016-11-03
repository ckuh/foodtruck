import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { getFoodTrucks } from '../actions/foodTruck'

class Home extends Component {

  componentWillMount () {
    this.props.getFoodTrucks()
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
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
