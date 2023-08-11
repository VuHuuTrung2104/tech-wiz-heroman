import React, { useState } from "react";
import Card from "../component/card";
import dummyData from "../dum-data/index.json";

<<<<<<< HEAD
export default function TwitchPagePage(params) {
    return(
        <div style={{backgroundColor: 'rgb(70, 70, 70)'}}>
            day la Twitch-page
        </div>
    );
}
=======
function TwitchPage() {
  console.log(dummyData);
  const [listChannel, setlistChannel] = useState(dummyData.listChannel || []);
  const matchListChannel = listChannel.filter((o) => {
    return o.provider === 3;
  });
  return (
    <div className="container py-5">
      <div className="row">
        {matchListChannel.map((o) => {
          return (
            <div key={o.id} className="col-md-12 col-lg-4 mb-3 mb-lg-2">
              <Card channel={o} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TwitchPage;
>>>>>>> 9f27c54b529cfc3b01eeb7b3c63f6463682f0209
