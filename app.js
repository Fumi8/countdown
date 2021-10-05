const countdown = () => {
  const countDate = new Date('November 11, 2021 00:00:00').getTime();  
  const now = new Date().getTime();  
  const gap = countDate - now;

  // how the fuck does time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Caculate the shit
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText  = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector (".second").innerText = textSecond;
  console.log(gap);

  //カウントダウンできた時に出したいメッセージ ifで作る
  if(gap < 10000){
      launchTheBullshit();
  }

};
//Mathfloor:で小数点を四捨五入?する
// % modulas  18 % 2 =0 割り切れる　　17 % 2 =1 割り切れない

//run multiple time loop
 setInterval(countdown, 1000);