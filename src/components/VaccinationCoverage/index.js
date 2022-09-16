import {Components} from 'react'
import './index.css'

class VaccinationCoverage extends Components {
  fetchDataFromUrl = () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const data = fetch(url, options)
    console.log(data)
  }

  render() {
    return <div>Hello</div>
  }
}

export default VaccinationCoverage
