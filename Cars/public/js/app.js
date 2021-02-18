
class App extends React.Component {
  state= {
    brand: '',
    model: '',
    image: '',
    cars: []
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
  event.preventDefault()
  axios
    .post('/cars', this.state)
    .then(response =>
      this.setState({ cars: response.data, brand: '', model: '', image: '' })
    )
  }

  updateCar = event => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/cars/' + id, this.state).then(response => {
    this.setState({
      cars: response.data,
      brand: '',
      model: '',
      image: ''
      })
    })
  }


  deleteCar = event => {
  axios.delete('/cars/' + event.target.value).then(response => {
    this.setState({
      cars: response.data
      })
    })
  }

componentDidMount = () => {
  axios.get('/cars').then(response => {
    this.setState({
      cars: response.data
      })
    })
  }

// On page //

  render = () => {
    return (
      <div>

        <h2>Create Car</h2>
          <details>
          <summary>Add a viehicle</summary>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <br />
            <input type="text" id="brand"  onChange={this.handleChange} />
            <br />
            <label htmlFor="model">Model</label>
            <br />
            <input type="text" id="model" onChange={this.handleChange} />
            <br />
            <label htmlFor="img">Image</label>
            <br />
            <input type="text" id="img" onChange={this.handleChange} />
            <br />
            <input type="submit" value="Create Car" />
        </form>
        </details>

        
        <h2>Vehicle Inventory</h2>
        <ul>
          {this.state.cars.map(car => {
            return (
              <li>
              {car.brand}
             <br />
              {car.model}
              <br />
              <img src={car.image} id='images'alt={car.model}/>



              <details>
              <summary>Edit the Car</summary>
              <form id={car._id} onSubmit={this.updateCar}>
              <label htmlFor="brand">Brand</label>
              <br />
              <input type="text" id="brand"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="model">Model</label>
              <br />
              <input type="text" id="model"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="image">Image</label>
              <br />
              <input type="text" id="image"
              onChange={this.handleChange}
              />
              <br />
              <input type="submit" value="Update Car" />
              </form>
              </details>


              <button value={car._id} onClick={this.deleteCar}>DELETE
              </button>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
