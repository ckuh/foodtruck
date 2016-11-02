import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

const { object } = React.PropTypes

Home.propTypes = {
  foodTruck: object
}

const mapStateToProps = (state) => ({foodTruck: state.foodTruck})

export default connect(mapStateToProps)(Home)
