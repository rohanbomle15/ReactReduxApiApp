import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBreweries } from './BrewerySlice'

import './Brewery.css'

const Cards = ({ brewery }) => {
  return (
    <div
      className="col-lg-4 mb-3 d-flex align-items-stretch h-100"
      key={brewery.id}>
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">{brewery.name}</h5>
          <p className="card-text">{brewery.city}</p>
          <p className='card-text'>{brewery.address_1}</p>
        </div>
      </div>
      </div>
  )
}

function Brewery() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.breweries)

  useEffect(() => {
    dispatch(getBreweries())
  }, [dispatch])

  let content

  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if (loading === 'idle') {
    content = data.map((item) => {
      return <Cards brewery={item} key={item.id} />
      })
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }

  return <div className="row">{content}</div>
}

export default Brewery