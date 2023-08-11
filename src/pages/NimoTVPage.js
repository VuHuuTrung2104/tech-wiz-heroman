import React, { useState } from "react";
import Card from "../component/card";
import dummyData from "../dum-data/index.json";

function NimoTVPage() {
  console.log(dummyData);
  const [listChannel, setlistChannel] = useState(dummyData.listChannel || []);
  const matchListChannel = listChannel.filter((o) => {
    return o.provider === 2;
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
export default NimoTVPage;
