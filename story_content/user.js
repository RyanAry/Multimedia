function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZQtUBNkf41":
        Script1();
        break;
      case "60eqOC8y2pM":
        Script2();
        break;
      case "63dkeG86eDA":
        Script3();
        break;
      case "5vow6BsuwTf":
        Script4();
        break;
  }
}

function Script1()
{
  if (!window.globalAudio) {
    window.globalAudio = new Audio("story_content/audio/zalora.mp3");
    window.globalAudio.loop = true;
    window.globalAudio.volume = 0.3;
}
}

function Script2()
{
  window.globalAudio.play();
}

function Script3()
{
  if (window.globalAudio) {
    window.globalAudio.play();
}
}

function Script4()
{
  if (window.globalAudio) {
    window.globalAudio.pause();
}
}

