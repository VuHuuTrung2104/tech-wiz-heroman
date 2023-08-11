import React, { useState } from "react";
import myData from "../dum-data";
import { Link } from "react-router-dom";
import "../asset/style/channelCard.css";
import CreateDialog from "./CreateProviderDialog";
import UpdateDialog from "./UpdateProviderDialog";
export default function FeedbackPage(props) {
  const { channel, removeChannel } = props;
  const myFav = localStorage.getItem("listFav")
    ? JSON.parse(localStorage.getItem("listFav"))
    : [];

  const isFavourite = myFav.includes(channel.id);

  const addToFavourite = () => {
    const myFav = localStorage.getItem("listFav")
      ? JSON.parse(localStorage.getItem("listFav"))
      : [];

    if (!myFav.includes(channel.id)) {
      myFav.push(channel.id);
    }
    localStorage.setItem("listFav", JSON.stringify(myFav));
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
          <button className="btn btn-danger d-block w-100">
            <a
              href={channel.url}
              target="_blank"
              className="text-white text-decoration-none "
            >
              Watch
            </a>
          </button>

          {/* <button className="btn btn-danger d-block w-25">
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
          </button> */}
        </div>
        <div className="d-flex align-items-center" style={{ gap: "12px" }}>
          <button
            type="button"
            className="btn btn-outline-danger rounded-circle delete-btn"
            onClick={() => {
              removeChannel(channel);
            }}
            title="Remove this channel"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
              alt="delete-icon"
              className="delete-icon"
            />
          </button>

          {isFavourite ? null : (
            <button
              type="button"
              className="btn btn-outline-danger rounded-circle delete-btn button-ico"
              onClick={addToFavourite}
              title="Add to my Favourite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
