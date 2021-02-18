
class App extends React.Component {
  state= {
    brand: '',
    model: '',
    year: '',
    color: '',
    price: '',
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
      this.setState({ cars: response.data, brand: '', model: '', year: '', color: '', price: '', image: '' })
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
      year: '',
      color: '',
      price: '',
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
      <div className='columns is-multiline is-3 is-narrow-mobile is-vcentered'>

        <div className='create '>
        <h2>New viehicle registry</h2>
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
            <label htmlFor="year">Year</label>
            <br />
            <input type="text" id="year" onChange={this.handleChange} />
            <br />
            <label htmlFor="color">Color</label>
            <br />
            <input type="text" id="color" onChange={this.handleChange} />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input type="text" id="price" onChange={this.handleChange} />
            <br />
            <label htmlFor="images">Image</label>
            <br />
            <input type="text" id="images" onChange={this.handleChange} />
            <br />
            <input type="submit" id='submit' value="Create Car" />
        </form>
        </details>
        </div>


        <div className='column-is-gap is-multiline is-3 is-narrow'>
        <h2>Vehicle Inventory</h2>
        <ul>
          {this.state.cars.map(car => {
            return (
              <div key={car._id}>
              <li>
              {car.brand}
             <br />
              {car.model}
              <br />
              {car.year}
              <br />
              {car.color}
              <br />
              {car.price}
              <br />
              <img src= {car.image} id='images' alt={car.color}/>





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
              <label htmlFor="year">Year</label>
              <br />
              <input type="text" id="year"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="color">Color</label>
              <br />
              <input type="text" id="color"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="price">Price</label>
              <br />
              <input type="text" id="price"
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="image">Image</label>
              <br />
              <input type="text" id="image"
              onChange={this.handleChange}
              />
              <br />
              <input type="submit" value="Update Car" id='updateCar'/>
              </form>
              </details>


              <button value={car._id} onClick={this.deleteCar}>DELETE
              </button>
              </li>
              </div>
            )
          })
        }
        </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
