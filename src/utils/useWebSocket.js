import { useEffect, useRef, useCallback } from "react";


function useWebSocket() {
  const socketRef = useRef();

  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:8000/ws/");
    webSocket.onopen = handleOpen;
    webSocket.onclose = handleClose;
    webSocket.onmessage = handleReceiveMessage;
    socketRef.current = webSocket;
  }, []);

  function handleOpen() {
    console.log("Websocket opened");
  }

  function handleClose() {
    console.log("Websocket closed");
  }

  const sendMessage = useCallback(
    message => {
      socketRef.current.send(JSON.stringify(message));
    },
    [socketRef]
  );

  const handleReceiveMessage = messageObject => {
    const message = JSON.parse(messageObject.data);
    switch (message.type) {
      // do stuff with the message
    }
  };
}

export default useWebSocket;