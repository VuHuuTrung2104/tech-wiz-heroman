import React, { useState } from "react";

export default function CreateDialog({ addNewChannel }) {
  const [form, setForm] = useState({ logoUrl: "", name: "", url: "" });

  const handleChangeFormData = (e) => {
    const myValue = e.target.value;
    const myKey = e.target.name;
    setForm({
      ...form,
      [myKey]: myValue,
    });
  };

  const resetForm = () => {
    setForm({ logoUrl: "", name: "", url: "" });
  };
  const submitForm = () => {
    if (!form.logoUrl || !form.name || !form.url) {
      alert("Please provide infomation");
      return;
    }
    const channelObj = {
      id: new Date().getTime(),
      name: form.name,
      provider: 1,
      previewImg: form.logoUrl,
      url: form.url,
      view: "87,625",
    };
    console.log(channelObj);
    addNewChannel(channelObj);
    resetForm();
  };

  return (
    <div>
      <button
        onClick={resetForm}
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#dialogAddNewChannelData"
      >
        Add new
      </button>
      <div
        className="modal fade"
        id="dialogAddNewChannelData"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="dialogAddNewChannelDataLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="dialogAddNewChannelDataLabel">
                Add Channel
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="ChannelLogoUrl" className="form-label">
                  Channel Banner URL
                </label>
                <input
                  value={form.logoUrl}
                  type="text"
                  placeholder="Eg: https://example.com/logo.png"
                  className="form-control"
                  id="ChannelLogoUrl"
                  aria-describedby="ChannelLogoUrl"
                  name="logoUrl"
                  onChange={handleChangeFormData}
                />
                <div
                  className="d-flex align-items-center pt-3"
                  style={{ gap: "12px" }}
                >
                  <div className="form-text">Logo will demo here</div>
                </div>
                <div
                  className="rounded"
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#d5d5d5",
                    border: "1px dashed #d5d5d5",
                    padding: "1px",
                  }}
                >
                  {form.logoUrl ? (
                    <img
                      src={form.logoUrl}
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="ChannelName" className="form-label">
                  Channel Name
                </label>
                <input
                  value={form.name}
                  type="text"
                  placeholder="Eg: Exciting Tracker"
                  className="form-control"
                  id="ChannelName"
                  name="name"
                  onChange={handleChangeFormData}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ChannelLink" className="form-label">
                  Channel URL
                </label>
                <input
                  value={form.url}
                  type="text"
                  placeholder="Eg: https://example.com"
                  className="form-control text-primary text-underline"
                  id="ChannelLink"
                  name="url"
                  onChange={handleChangeFormData}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={resetForm}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
