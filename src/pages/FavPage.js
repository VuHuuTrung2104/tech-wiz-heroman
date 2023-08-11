import React, { useState, useEffect } from "react";
import Card from "../component/card";
import dummyData from "../dum-data/index.json";

function HomePage() {
  const [listChannel, setlistChannel] = useState([]);

  useEffect(() => {
    const myFav = localStorage.getItem("listFav")
      ? JSON.parse(localStorage.getItem("listFav"))
      : [];
    const listDummy = dummyData.listChannel || [];
    const myMatchList = listDummy.filter((o) => myFav.includes(o.id));
    setlistChannel(myMatchList);
  }, []);

  const removeChannel = (channel) => {
    const newArray = listChannel.filter((item) => {
      return item.id !== channel.id;
    });
    setlistChannel(newArray);
  };

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "rgb(70, 70, 70)" }}
    >
      <h1 style={{ color: "white", padding: "15px" }}>Fav page</h1>
      <div className="row">
        {listChannel.map((o) => {
          return (
            <div key={o.id} className="col-md-12 col-lg-4 mb-3 mb-lg-2">
              <Card channel={o} removeChannel={removeChannel} />
            </div>
          );
        })}
        {listChannel.length ? null : (
          <div>
            <h3 style={{ color: "white", padding: "15px" }}>
              You do not have any channel in your favourite site. Add one now?
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
