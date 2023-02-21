import React from "react";
import "../../style.css";
import "../../all.css";

export default function connectionPart({ connection, auth }) {
  const connections = connection.allConnections;
  const pending = connection.allConnectionsRequest;
  const id = auth.userInfo._id;

  return (
    <>
      <div style={{width:"100%", padding: "3%"}}>
        <h2>
          Your Network{" "}
          <img src="https://img.icons8.com/small/44/c3357f/conference-background-selected.png" />
        </h2>
        <div style={{display:"flex"}}>
          {connections.map((s) => {
            const createdId = s.createdBy._id;
            const receivedBy = s.recievedBy._id;
            const name =
              createdId === id ? s.recievedBy.name : s.createdBy.name;
            return (
              <div
              key={s.id}
              // class="media"
              style={{
                boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                padding: "30px",
                marginBottom: "10px",
                margin: "10px",
                textAlign:"center"
              }}
            >
              <div class="media-left">
                <img src="https://img.icons8.com/small/28/c3357f/user-male-circle.png" />
              </div>
              <div class="media-body" style={{minWeight:"60px"}}>
                <p class="connect_p">{name}</p>
                <p>UX Designer at ABC com.</p>
              </div>
              <div className="connect-right">
                <button
                  onClick={() => {}}
                  className="connect_btn"
                  style={{ borderRadius: "10px", padding: "2px 4px" }}
                >
                  {"View Profile"}
                </button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
