var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    if((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304){
      alert(xhr.responseText);
    }else{
      alert("Request was unsuccessful:" + xhr.status);
    }
  }
  //get
  xhr.open("get", "example.php", true);
  xhr.setRequestHeader("MyHeader", "MyValue");
  xhr.send(null);
  //post
  // xhr.open("post", "postexample.php", true);
  // xhr.setRequestHeader("Content-Type", "applicatoin/x-www-form-urlencoded");
  // var form = document.getElementById("user-info");
  // xhr.send(serialize(form));
};
