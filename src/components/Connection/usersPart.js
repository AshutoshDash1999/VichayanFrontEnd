import React from "react";
import "../../style.css";
import "../../all.css";
import { sendConnectionRequest } from "../../Redux/actions/connections/connectionAction";

export default function connectionPart({ connection }) {
  const connections = connection.allConnections;
  const users = connection.allUsers;
  const pending = connection.allConnectionsRequest;

  return (
    <>
      <div style={{width:"70%", padding: "3%"}}>
        <h2>
          Build Your Network{" "}
          <img src="https://img.icons8.com/small/44/c3357f/conference-background-selected.png" />
        </h2>
        <div style={{display:"flex", flexWrap: "wrap"}}>
        {users.map((s) => {
          const isRequestSent = pending.some((some) => {
            return some.recievedBy._id === s._id;
          });

          return (
            <div
              key={s.id}
              // class="media"
              style={{
                boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                padding: "20px",
                marginBottom: "10px",
                margin: "10px",
                textAlign:"center",
              }}
            >
              <div class="media-left" >
                <img src="https://img.icons8.com/small/28/c3357f/user-male-circle.png" />
              </div>
              <div class="media-body" style={{minHeight:"60px"}}>
                <p class="connect_p">{s.name}</p>
                <p>UX Designer at ABC com.</p>
              </div>
              <div className="connect-right">
                <button
                  onClick={() => {
                    if (!isRequestSent) {
                      sendConnectionRequest(s._id);
                    }
                  }}
                  className="connect_btn"
                  style={{ borderRadius: "10px", padding: "2px 4px" }}
                >
                  {isRequestSent ? "Pending" : "Connect"}
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
