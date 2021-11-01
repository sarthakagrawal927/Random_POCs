import React from "react";
import { DyteMeeting } from "dyte-client";
import { useHistory } from "react-router-dom";
// import { joinExistingRoom } from "../utils";

export const MeetingComponent = () => {
  let history = useHistory();
  let auth =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhZWRmNjk0LTg2MjQtNGFkZi04MDI4LTBjNjExNDhhZmI1OSIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2MzU3NTYyMTAsImV4cCI6MTYzNTg0MjYxMH0.I5L1jX0Q5nW9bj1h6ZXSYGgMOMGVONRHj2_3V5UP74wh79BhtXp6FHWSWhhIamDws4vXTj6cV6488TLmUzkqisLhAM-XXtr0xhnoL2Er9t-_9DsQfAnV0WydAJgltYRHvlJ3r-9IQhDRzvfaut8LMsxo0WIZlsGoukCaVTr5LFob-ROIgMejaAq5o09O33GKSTRhX0FQZOyGnz0xweupgjPCv9o9L5XqBFSMZRGHGGl9JXN3l3FowqBDH7dPQut9S483IbQy7pjG5gbMc3gQig1INp32IjtvPTyzGT7vaeBfiuYjwr2JTNOAewUit1OTSo3HrRkhj2zrErZHQu6IcA";
  let roomName = "ghgkaa-pbmcwi";

  const onDyteInit = (meeting) => {
    console.log(meeting);
    // meeting.on(meeting.Events.meetingJoined, () => {
    //   meeting.grid.update({
    //     layout: meeting.grid.layouts.HIGHLIGHTED,
    //   });
    // });

    meeting.on(meeting.Events.participantJoin, (participant) => {
      participant.pin();
    });

    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      history.push("/");
    });
  };

  //   useEffect(() => {
  //     if (!auth && !roomName) {
  //       //creating a new participant
  //       joinExistingRoom(params.id, params.room);
  //     }
  //   }, []);

  return (
    <React.Fragment>
      {auth && roomName && process.env.REACT_APP_DYTE_ORG_ID && (
        <DyteMeeting
          onInit={onDyteInit}
          //   uiConfig={{
          //     waitingRoom: {
          //       showSelf: false,
          //     },
          //     headerElements: {
          //       clock: true,
          //       title: true,
          //       logo: true,
          //       participantCount: true,
          //     },
          //     controlBarElements: {
          //       plugins: false,
          //       screenShare: false,
          //       share: false,
          //       participants: false,
          //       chat: false,
          //       polls: false,
          //     },
          //     aloneHereElement: false,
          //   }}
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
