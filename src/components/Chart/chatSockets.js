import React from "react";
export default function ChartSockets({ selectedUser }) {
  const showChat = selectedUser === null;

  return (
    <>
      {!showChat ? (
        <div class="col-md-8 chat" style={{ padding: "0 23px 0 0px" }}>
          <div class="card">
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                  <span class="online_icon"></span>
                </div>
                <div class="user_info">
                  <span>{selectedUser.name}</span>
                  <p>1767 Messages</p>
                </div>
                <div class="video_cam">
                  <span>
                    <img src="https://img.icons8.com/ios-glyphs/24/000000/phone-disconnected.png" style={{ transform: "rotate(0deg)" }} />
                  </span>
                  <span>
                    <img src="https://img.icons8.com/material-rounded/24/000000/video-call.png" />
                  </span>
                </div>
              </div>
              <span id="action_menu_btn">
                <img src="https://img.icons8.com/material-outlined/24/000000/menu-2.png" style={{ color: "#828282" }} />
              </span>
              <div class="action_menu">
                <ul>
                  <li>
                    <i class="fas fa-user-circle"></i> View profile
                  </li>
                  <li>
                    <i class="fas fa-users"></i> Add to close friends
                  </li>
                  <li>
                    <i class="fas fa-plus"></i> Add to group
                  </li>
                  <li>
                    <i class="fas fa-ban"></i> Block
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body msg_card_body">
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                </div>
                <div class="msg_cotainer">
                  Hi, how are you Manas?
                  <span class="msg_time">8:40 AM, Today</span>
                </div>
              </div>
              <div class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                  Hi Chinmaya i am good tnx how about you?
                  <span class="msg_time_send">8:55 AM, Today</span>
                </div>
                <div class="img_cont_msg">
                  <img src="images/baby.png" class="rounded-circle user_img_msg" />
                </div>
              </div>
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                </div>
                <div class="msg_cotainer">
                  I am good too, thank you for your chat template
                  <span class="msg_time">9:00 AM, Today</span>
                </div>
              </div>
              <div class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                  You are welcome
                  <span class="msg_time_send">9:05 AM, Today</span>
                </div>
                <div class="img_cont_msg">
                  <img src="images/baby.png" class="rounded-circle user_img_msg" />
                </div>
              </div>
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                </div>
                <div class="msg_cotainer">
                  I am looking for your next templates
                  <span class="msg_time">9:07 AM, Today</span>
                </div>
              </div>
              <div class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                  Ok, thank you have a good day
                  <span class="msg_time_send">9:10 AM, Today</span>
                </div>
                <div class="img_cont_msg">
                  <img src="images/baby.png" class="rounded-circle user_img_msg" />
                </div>
              </div>
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                </div>
                <div class="msg_cotainer">
                  Bye, see you
                  <span class="msg_time">9:12 AM, Today</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <div class="input-group-append">
                  <span class="input-group-text attach_btn">
                    <img src="https://img.icons8.com/ios/24/000000/happy--v1.png" />
                  </span>
                  <span class="input-group-text attach_btn">
                    <img src="https://img.icons8.com/ios-filled/24/000000/attach.png" />
                  </span>
                </div>
                <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                {/* <textarea class="form-control type_msg textarea-control" rows="3" placeholder="Textarea with emoji image input" data-emojiable="true"></textarea> */}

                {/* <p class="lead emoji-picker-container">
                                      <textarea class="form-control textarea-control" rows="3" placeholder="Textarea with emoji image input" data-emojiable="true"></textarea>
                                  
                                  </p> */}
                <div class="input-group-append">
                  <span class="input-group-text send_btn">
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/filled-sent.png" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="col-md-8 chat empty-state-chat" style={{ padding: "0 23px 0 0px" }}>
          Please select a person
        </div>
      )}
    </>
  );
}
