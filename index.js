let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function(e) {
  alert("[open] Соединение установлено");
  alert("Oтправляем данные на сервер");
  socket.send("Меня зовут Джон");
}

socket.onmessage = function(e) {
  alert(`[message] Данные получены с сервера: ${e.data}`);
}

socket.onclose = function(e) {
  if(e.wasClean) {
    alert(`[close] Соединение закрыто чисто, код=${e.code} причина=${e.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    alert('[close] Соединение прервано');    
  }
}

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
}