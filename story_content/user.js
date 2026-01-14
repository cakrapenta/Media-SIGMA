function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vX5wktFVpw":
        Script1();
        break;
      case "5adtjDGC6Kl":
        Script2();
        break;
      case "5zGXKU9unHv":
        Script3();
        break;
      case "6SuhQLH76wU":
        Script4();
        break;
      case "6JQXRHOhDZo":
        Script5();
        break;
      case "6eutJTEvFkF":
        Script6();
        break;
      case "6cJlKKTu7vE":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=1.0;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume= 1.0;
}

