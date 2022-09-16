import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashBoard extends Component {
  //   failureView = () => {
  //     <div>
  //       <img
  //         src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
  //         alt="failure view"
  //       />
  //     </div>
  //   }

  render() {
    return (
      <div>
        <div className="dash-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="logo-text">Co-Win</h1>
        </div>
        <div className="co-win">
          <h1 className="vaccine-head">CoWIN Vaccination in India</h1>
          <VaccinationCoverage />
        </div>
      </div>
    )
  }
}

export default CowinDashBoard
