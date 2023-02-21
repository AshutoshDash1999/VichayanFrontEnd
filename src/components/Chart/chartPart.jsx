import React, { Component, useState } from "react";
import "../../style.css";
import "../../all.css";
import "./chartPart.css";
import ChartSockets from "./chatSockets";
export default function ChartPart({ users, auth }) {
  const id = auth.userInfo._id;
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <>
      <div class="chat-page">
        <div class="container-fluid h-100">
          <div class="row justify-content-center h-100">
            <div class="col-md-4 chat" style={{ padding: "0 0 0 24px" }}>
              <div class="card mb-sm-3 mb-md-0 contacts_card">
                <div class="card-header">
                  <div class="input-group">
                    <input type="text" id="myInput" placeholder="Search..." name="" class="form-control search" />
                    <div class="input-group-prepend">
                      <span class="input-group-text search_btn">
                        <img src="https://img.icons8.com/material-rounded/24/ffffff/search.png" />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="tabset">
                  {/* <!-- Tab 1 --> */}
                  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked />
                  <label className="flex-main" for="tab1">
                    <span className="mr-3">Recent</span>
                  </label>
                  {/* <!-- Tab 2 --> */}
                  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />

                  <label for="tab2">
                    <span className="mr-3">Online</span>
                  </label>
                  {/* <!-- Tab 3 --> */}
                  {/* <!-- <input type="radio" name="tabset" id="tab3" aria-controls="dunkles">
                                                    <label for="tab3">Dunkles Bock</label> --> */}

                  <div class="tab-panels">
                    <section id="marzen" class="tab-panel">
                      <div class="card-body contacts_body">
                        <ul id="myUL" class="contacts pointer">
                          {users.map((s) => {
                            const createdId = s.createdBy._id;
                            const name = createdId === id ? s.recievedBy.name : s.createdBy.name;
                            return (
                              <li
                                class="active"
                                onClick={() => {
                                  setSelectedUser({ ...s, name: name });
                                }}
                              >
                                <div class="d-flex bd-highlight">
                                  <div class="img_cont">
                                    <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                    <span class="online_icon"></span>
                                  </div>
                                  <div class="user_info">
                                    <span>{name}</span>
                                    <p>{name} is online</p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </section>
                    <section id="rauchbier" class="tab-panel">
                      <div class="card-body contacts_body">
                        <ul id="myUL" class="contacts pointer">
                          {users.map((s) => {
                            const createdId = s.createdBy._id;
                            const name = createdId === id ? s.recievedBy.name : s.createdBy.name;
                            return (
                              <li
                                class="active"
                                onClick={() => {
                                  setSelectedUser({ ...s, name: name });
                                }}
                              >
                                <div class="d-flex bd-highlight">
                                  <div class="img_cont">
                                    <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                    <span class="online_icon"></span>
                                  </div>
                                  <div class="user_info">
                                    <span>{name}</span>
                                    <p>{name} is online</p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>

                <div class="card-footer"></div>
              </div>
            </div>
            <ChartSockets selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </>
  );
}
