import React, { useEffect } from "react";
import { DyteMeeting, Meeting } from "dyte-client";
import { useHistory, useParams } from "react-router-dom";
import { joinExistingRoom } from "../utils";

export const MeetingComponent: React.FC<{}> = () => {
  let history = useHistory();
  let params: {
    id: string;
    room: string;
  } = useParams();
  let auth = sessionStorage.getItem("auth");
  let roomName = sessionStorage.getItem("roomName");

  const onDyteInit = (meeting: Meeting) => {
    console.log(meeting);
    meeting.on(meeting.Events.meetingJoined, () => {
      meeting.controlBar.addButton({
        icon: <div>😀</div>,
        label: "React 😀",
        position: "center",
        onClick: () => {
          alert("Reaction Click");
        },
      });
      meeting.grid.update({
        layout: meeting.grid.layouts.HIGHLIGHTED,
      });
    });

    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      history.push("/");
    });
  };

  useEffect(() => {
    if (!auth && !roomName) {
      //creating a new participant
      joinExistingRoom(params.id, params.room);
    }
  }, []);

  return (
    <React.Fragment>
      {auth && roomName && process.env.REACT_APP_DYTE_ORG_ID && (
        <DyteMeeting
          onInit={onDyteInit}
          uiConfig={{
            waitingRoom: {
              showSelf: false,
            },
            headerElements: {
              clock: true,
              title: true,
              logo: true,
              participantCount: false,
            },
            controlBarElements: {
              plugins: false,
              screenShare: false,
              share: false,
              participants: false,
              chat: false,
              polls: false,
              fullscreen: false,
            },
            dimensions: {
              width: 500,
              height: 800,
            },
            aloneHereElement: false,
            logo: `data:image/jpeg;base64,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`,
          }}
          clientId={process.env.REACT_APP_DYTE_ORG_ID}
          meetingConfig={{
            roomName: roomName,
            authToken: auth,
            apiBase: process.env.REACT_APP_DYTE_BASE_URL,
          }}
        />
      )}
    </React.Fragment>
  );
};
