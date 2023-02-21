import React, { Component } from "react";
import "../../style.css";
import "../../all.css";
import "./leftPart.css";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import styles from './Profile.css';

export default function ConnectionLeft({ connection, from = "" }) {
  const connections = connection.allConnections;
  const requests = connection.allPendingRequests.length;
  const users = connection.allUsers;

  return (
    <>
      {/* <div className=""> */}
      <div style={{minWidth:"25%", padding:"2% 4%"}}>
        <div class="clr-bdr mt-o">
          <h4 class="articles">Manage my network </h4>
          <Card>
            <CardContent>
              <div style={{ marginBottom: "10px" }}>
                <Link to="/connection" className="link-custom">
                  <div
                    class="media"
                    style={{
                      padding: "5px",
                      boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                      borderRadius: "10px"
                    }}
                  >
                    <div class="media-left">
                      <img src="https://img.icons8.com/ios/23/c3357f/connection-to-account.png" />
                    </div>
                    <div class="media-body">
                      <p class="connect_p">Connection</p>
                    </div>
                    <div className="media-right">
                      <h5>{connections.length}</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div style={{ marginBottom: "10px" }}></div>
              <div style={{ marginBottom: "10px" }}>
                <Link to="/users" className="link-custom">
                  <div
                    class="media"
                    style={{
                      padding: "5px",
                      boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                      borderRadius: "10px"
                    }}
                  >
                    <div class="media-left">
                      <img src="https://img.icons8.com/ios/23/c3357f/connection-to-account.png" />
                    </div>
                    <div class="media-body">
                      <p class="connect_p">users</p>
                    </div>
                    <div className="media-right">
                      <h5>{users.length}</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Link to="/friendRequests" className="link-custom">
                  <div
                    class="media"
                    style={{
                      padding: "5px",
                      boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                      borderRadius: "10px"
                    }}
                  >
                    <div class="media-left">
                      <img src="https://img.icons8.com/ios/23/c3357f/connection-to-account.png" />
                    </div>
                    <div class="media-body">
                      <p class="connect_p">Requests</p>
                    </div>
                    <div className="media-right">
                      <h5>{requests}</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div
                  class="media"
                  style={{
                    padding: "5px",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                    borderRadius: "10px"
                  }}
                >
                  <div class="media-left">
                    <img src="https://img.icons8.com/small/23/c3357f/address-book.png" />
                  </div>
                  <div class="media-body">
                    <p class="connect_p">Contacts</p>
                  </div>
                  <div className="media-right">
                    <h5>54</h5>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div
                  class="media"
                  style={{
                    padding: "5px",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                    borderRadius: "10px"
                  }}
                >
                  <div class="media-left">
                    <img src="https://img.icons8.com/small/23/c3357f/queue.png" />
                  </div>
                  <div class="media-body">
                    <p class="connect_p">People I Follow</p>
                  </div>
                  <div className="media-right">
                    <h5>70</h5>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div
                  class="media"
                  style={{
                    padding: "5px",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                    borderRadius: "10px"
                  }}
                >
                  <div class="media-left">
                    <img src="https://img.icons8.com/small/23/c3357f/crowd.png" />
                  </div>
                  <div class="media-body">
                    <p class="connect_p">Group</p>
                  </div>
                  <div className="media-right">
                    <h5>2</h5>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div
                  class="media"
                  style={{
                    padding: "5px",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                    borderRadius: "10px"
                  }}
                >
                  <div class="media-left">
                    <img src="https://img.icons8.com/small/23/c3357f/planner.png" />
                  </div>
                  <div class="media-body">
                    <p class="connect_p">Event</p>
                  </div>
                  <div className="media-right">
                    <h5>0</h5>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div
                  class="media"
                  style={{
                    padding: "5px",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
                    borderRadius: "10px"
                  }}
                >
                  <div class="media-left">
                    <img src="https://img.icons8.com/small/23/c3357f/split-table.png" />
                  </div>
                  <div class="media-body">
                    <p class="connect_p">Pages</p>
                  </div>
                  <div className="media-right">
                    <h5>1</h5>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Show More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}
