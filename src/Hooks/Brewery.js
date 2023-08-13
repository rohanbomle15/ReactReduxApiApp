import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreweries } from "../Features/BrewerySlice";
import Infocard from "../Components/Infocard";
import Loading from "../Components/Loading";
import ErrorInfo from "../Components/ErrorInfo";
import "../App.css";

function Brewery() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.breweries);

  useEffect(() => {
    dispatch(getBreweries());
  }, [dispatch]);

  let content;

  if (loading === "pending") {
    content = <Loading />;
  }
  if (loading === "idle") {
    content = data.map((item) => {
      return <Infocard brewery={item} key={item.id} />;
    });
  }
  if (error !== null) {
    content = <ErrorInfo error={error} />;
  }

  return <div className="row">{content}</div>;
}

export default Brewery;
