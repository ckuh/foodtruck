import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'

class Card extends Component {
  renderFoodTruck () {
    return this.props.foodTruck.list.length ? _.map(this.props.foodTruck.list, (item, key) => (
      <div key={key}>
        <h4>{item.applicant}</h4>
        <div>Type: {item.facilitytype}</div>
        <div>Address: {item.address}</div>
        <div>Hours: {item.dayshours}</div>
        <div>Contents: {item.fooditems.split(':').join(',')}</div>
      </div>
    )) : []
  }

  render () {
    return (
      <div>
        {this.renderFoodTruck()}
      </div>
    )
  }
}

const { object } = React.PropTypes

Card.propTypes = {
  foodTruck: object
}

const mapStateToProps = (state) => ({foodTruck: state.foodTruck})

export default connect(mapStateToProps)(Card)
