import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getBreweries } from "./BrewerySlice";
import Barcard from "../Components/BarCard";
import Loading from "../Components/Loading";
import ErrorInfo from "../Components/ErrorInfo";
import { getBars } from "./BarSlice";

function Bar() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.bars);

  useEffect(() => {
    dispatch(getBars());
  }, [dispatch]);

  let content;

  if (loading === "pending") {
    content = <Loading />;
  }
  if (loading === "idle") {
    content = data.map((item) => {
      return <Barcard brewery={item} key={item.id} />;
    });
  }
  if (error !== null) {
    content = <ErrorInfo error={error} />;
  }

  return <div className="row">{content}</div>;
}

export default Bar;
