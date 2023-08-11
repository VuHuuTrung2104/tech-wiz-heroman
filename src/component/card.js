import React, { useState } from "react";
import myData from "../dum-data";
import { Link } from "react-router-dom";
import CreateDialog from "./CreateProviderDialog";
import UpdateDialog from "./UpdateProviderDialog";
export default function FeedbackPage(props) {
  const { channel } = props;
  const removeProvider = (channel) => {
    const newArray = channel.filter((item) => {
      return item.id !== channel;
    });
  };
  return (
    <div className="card" style={{ background: "rgb(36, 36, 36)" }}>
      <div className="d-flex justify-content-between p-3">
        <p
          style={{ color: "white", fontSize: "20px", fontWeight: "500" }}
          className="lead mb-0"
        >
          {channel.name}
        </p>
        <div
          className="bg-danger rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
          style={{
            width: "35px",
            height: "35px",
          }}
        >
          <p className="text-white mb-0 small">Live</p>
        </div>
      </div>
      <div className="card-body">
        <img
          src={channel.previewImg}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover", objectPosition: "top" }}
        />
        <div className="d-flex justify-content-between my-3">
          <h5 className="text-dark">{channel.shortMsg}</h5>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <p className="text-muted mb-0">
            Watching: <span className="fw-bold">{channel.view}</span>
          </p>
          <div className="ms-auto text-warning">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <button className="btn btn-danger d-block w-25">
            <a
              href={channel.url}
              target="_blank"
              className="text-white text-decoration-none "
            >
              Watch
            </a>
          </button>
          <button className="btn btn-danger d-block w-25">
            <a href="" className="text-white text-decoration-none ">
              <div>
                <CreateDialog />
              </div>
            </a>
          </button>
          <button className="btn btn-danger d-block w-25">
            <div>
              <UpdateDialog />
            </div>
          </button>
          <button className="btn btn-danger d-block w-25">
            <a
              href=""
              className="text-white text-decoration-none "
              onClick={() => {
                removeProvider(channel);
              }}
            >
              Delete
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
