import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrewPubCard from "../Components/BrewPubCard";
import Loading from "../Components/Loading";
import ErrorInfo from "../Components/ErrorInfo";
import { getBrewPubs } from "../Features/BrewPubSlice";
import "../App.css";

function BrewPub() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.bars);

  useEffect(() => {
    dispatch(getBrewPubs());
  }, [dispatch]);

  let content;

  if (loading === "pending") {
    content = <Loading />;
  }
  if (loading === "idle") {
    content = data.map((item) => {
      return <BrewPubCard brewery={item} key={item.id} />;
    });
  }
  if (error !== null) {
    content = <ErrorInfo error={error} />;
  }

  return <div className="row">{content}</div>;
}

export default BrewPub;
