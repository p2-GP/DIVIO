import React from "react";
import { randomID } from "../utils";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate } from "react-router";

const VideoHome = ({ params, setParams }) => {
	const param = params.size > 0 ? Object.fromEntries(params.entries()).roomID : randomID(5);
	const navigate = useNavigate();

	console.log("video component: ", param);

	let myMeeting = async (element) => {
		// generate Kit Token
		const appID = +import.meta.env.VITE_APP_ID;
		const serverSecret = import.meta.env.VITE_SERVER_SECRET;
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, param, randomID(5), randomID(5));

		// Create instance object from Kit Token.
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		// start the call

		// zp.queryHistoryMesssage().then((res) => console.log("test"));
		// zp.onInRoomMessageReceived((res) => alert(res));
		zp.joinRoom({
			onInRoomMessageReceived: (messageInfo) => {
				alert(messageInfo);
				// console.log("onInRoomMessageReceived", messageInfo);
				// Wrap the received in-room messages with appropriate elements and display them in the desired location.
			},
			receiveGroupMessage: (msg) => {
				console.log("message group");
			},
			onIMRecvBarrageMessage: (msg) => {
				console.log("on im received msg");
			},
			onInRoomCustomCommandReceived: (msg) => {
				console.log("masuk2");
			},
			lowerLeftNotification: (msg) => {
				console.log("text message");
			},
			container: element,
			sharedLinks: [
				{
					name: "Personal link",
					url: window.location.protocol + "//" + window.location.host + window.location.pathname + "?roomID=" + param,
				},
			],

			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
			},
		});

		// zp.onInRoomMessageReceived({});

		zp.on("IMRecvBroadcastMessage", (roomID, chatData) => {
			console.log("Broadcast message defined by using IMRecvBroadcastMessage", roomID, chatData[0].message);
			alert(chatData[0].message);
		});

		// Notification of receiving a pop-up message
		zp.on("IMRecvBarrageMessage", (roomID, chatData) => {
			console.log("Pop-up message defined by using IMRecvBroadcastMessage", roomID, chatData[0].message);
			alert(chatData[0].message);
		});

		// Notification of receiving a custom signaling message
		zp.on("IMRecvCustomCommand", (roomID, fromUser, command) => {
			console.log("Custom message defined by using IMRecvCustomCommand", roomID, fromUser, command);
			alert(command);
		});
	};

	return <div className="myCallContainer" ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default VideoHome;
