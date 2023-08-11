import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Breweries from './Features/Brewery'

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1">Brewery Store</div>
        <div>
          <div>
            <a className="nav-link" aria-current="page" href="#">
              Breweries
            </a>
          </div>
        </div>
      </div>
      <Breweries />
    </div>
  )
}
export default App