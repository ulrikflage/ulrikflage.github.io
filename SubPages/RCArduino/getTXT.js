var client = new XMLHttpRequest();
client.open('GET', '/RCArduino.ino');
client.onreadystatechange = function() {
    alert(client.responseText);
}
client.send();