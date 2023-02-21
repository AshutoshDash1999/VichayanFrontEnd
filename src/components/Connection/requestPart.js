import React, { Component } from "react";
import "../../style.css";
import "../../all.css";
import {
  acceptConnetionRequest,
  rejectFriendRequest,
} from "../../Redux/actions/connections/connectionAction";

export default function RequestPart({ connection, from = "" }) {
  const pending = connection.allPendingRequests;

  return (
    <>
      <div style={{ width: "100%", padding: "3%" }}>
        <h2>
          Friend Requests{" "}
          <img src="https://img.icons8.com/small/44/c3357f/conference-background-selected.png" />
        </h2>
        <div style={{ display: "flex" }}>
          {pending.map((s) => (
            <div
              key={s.id}
              // class="media"
              style={{
                boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                padding: "30px",
                marginBottom: "10px",
                margin: "10px",
                textAlign:"center",
                minWidth: "150px"
              }}
            >
              <div class="media-left">
                <img src="https://img.icons8.com/small/28/c3357f/user-male-circle.png" />
              </div>
              <div class="media-body" style={{minHeight:"60px"}}>
                <p class="connect_p">{s.createdBy.name}</p>
                <p>UX Designer at ABC com.</p>
              </div>
              <div className="connect-right">
                <button
                  onClick={() => {
                    acceptConnetionRequest(s._id);
                  }}
                  className="connect_btn"
                  style={{ borderRadius: "10px", padding: "2px 4px" }}
                >
                  Accept
                </button>

                <button
                  onClick={() => {
                    rejectFriendRequest(s._id);
                  }}
                  className="connect_btn mobile_none"
                  style={{ borderRadius: "10px", padding: "2px 4px" }}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
