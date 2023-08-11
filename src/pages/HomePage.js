import React, { useState } from "react";
import Card from "../component/card";
import dummyData from "../dum-data/index.json";
import CreateChannelDialog from "../component/CreateChannelDialog";

function HomePage() {
  console.log(dummyData);
  const [listChannel, setlistChannel] = useState(dummyData.listChannel || []);

  const removeChannel = (channel) => {
    const newArray = listChannel.filter((item) => {
      return item.id !== channel.id;
    });
    setlistChannel(newArray);
  };

  const addNewChannel = (channelData) => {
    setlistChannel([channelData, ...listChannel]);
  };

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "rgb(70, 70, 70)" }}
    >
      <h1 style={{ color: "white", padding: "15px" }}>Home page</h1>

      <div className="row">
        <div className="col-md-12 col-lg-4 mb-3 mb-lg-2">
          <CreateChannelDialog addNewChannel={addNewChannel} />
        </div>
        {listChannel.map((o) => {
          return (
            <div key={o.id} className="col-md-12 col-lg-4 mb-3 mb-lg-2">
              <Card channel={o} removeChannel={removeChannel} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
