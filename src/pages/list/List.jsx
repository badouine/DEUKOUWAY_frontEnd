import './list.css';
import React from "react";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from "date-fns";

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar/>
      <Header type="list"/> 
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label >Destination</label>
              <input type="text"/>
            </div>
            <div className="listItem">
              <label >Check-in Date</label>
              <span>
              {`${format(date[0].startDate, "MM/dd/yyyy")} à ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
            </div>
          </div>
            <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List