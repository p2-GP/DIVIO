import React, { useContext, useEffect } from "react";
import { randomID, readDatabase } from "../utils";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate } from "react-router";
import { errtoast, successLogin } from "../utils/sweetAlert";
import dataContext from "../stores/DataProvider";
import { onValue } from "@firebase/database";

const VideoHome = ({ params, setParams }) => {
	const { user, setUser } = useContext(dataContext);

	console.log("user: ", user);

	const fetchData = async () => {
		const res = await readDatabase("/users");
		onValue(res, (snapshot) => {
			const datas = snapshot.val();
			const index = Object.entries(datas).find((el) => el[0] === localStorage.userid);

			setUser(index[1][0]);
		});
	};

	useEffect(() => {
		if (!user.name) {
			fetchData();
			console.log("masuk");
		}
	}, [setUser]);

	const param = params ? params : randomID(5);

	console.log("video component: ", param);

	let myMeeting = async (element, type = "one") => {
		// generate Kit Token
		const appID = +import.meta.env.VITE_APP_ID;
		const serverSecret = import.meta.env.VITE_SERVER_SECRET;
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, param, randomID(5), user.name ? user.name : randomID(5));

		// Create instance object from Kit Token.
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		// start the call

		let mode = ZegoUIKitPrebuilt.OneONoneCall;
		if (type === "group") mode = ZegoUIKitPrebuilt.GroupCall;

		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: "Personal link",
					url: window.location.protocol + "//" + window.location.host + window.location.pathname + "?roomID=" + param,
				},
			],

			lowerLeftNotification: {
				showUserJoinAndLeave: false, // Hide the user joining/leaving notification on the lower left.
				showTextChat: false, // Hide the text chat on the lower left.
			},
			onInRoomMessageReceived: (messageInfo) => {
				console.log("onInRoomMessageReceived", messageInfo);
				// Wrap the received in-room messages with appropriate elements and display them in the desired location.
			},
			onUserJoin: (user) => {
				console.log("user: ", user, "<<", user.username);
				successLogin(user.username + " Joined");
			},
			onUserLeave: (user) => {
				errtoast(user.username + " leave");
			},
			scenario: {
				mode, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
			},
		});
	};

	return <div className="myCallContainer" ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default VideoHome;
