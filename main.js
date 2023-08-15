let pontos = 0;
let tail = 2;
let vel = 1; 


window.onload = function(){
    let area = document.getElementById('area');
    let pontosElement = document.getElementById('pontos');
    let ctx = area.getContext("2d");
    let vx = 0;
    let vy = 0;
    let px = 10;
    let py = 15;
    const tp = 20;
    const qp = 20;
    let applex = 15;
    let appley = 15;
    let trail = [];
    
    document.addEventListener("keydown", keyPush);
    const easy = document.getElementById('js-easy');
    const middle = document.getElementById('js-middle');
    const hard = document.getElementById('js-hard');
    easy.addEventListener('click', () => setLevel(100));
    middle.addEventListener('click', () => setLevel(70));
    hard.addEventListener('click', () => setLevel(50));
    
    let gameInterval;

    function setLevel(interval) {
        clearInterval(gameInterval);
        gameInterval = setInterval(game, interval);
    }

    setLevel(70);
          function game(){
      
              px += vx
              py += vy
      
              if (px < 0) {
                  px = qp-1
              }
              if (px > qp-1) {
                  px = 0
              }
              if (py < 0) {
                  py = qp-1
              }
              if (py > qp-1) {
                  py = 0
              }

              ctx.fillStyle = "#111D4A"
              ctx.fillRect(0,0, area.width, area.height)

              ctx.fillStyle = "#EA2B1F"
              ctx.fillRect(applex*tp, appley*tp, tp,tp,2,2)

              for (let i = 0; i < trail.length; i++) {
                ctx.fillStyle = "#09BC8A"
                ctx.strokeStyle = "#004346"
                  ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp,tp)
                  ctx.strokeRect(trail[i].x*tp, trail[i].y*tp, tp,tp)
                   if (trail[i].x == px && trail[i].y == py)
                  {
                      vx = vy = 0
                      tail = 2
                      pontos = 0
                  }
              }

              trail.push({x:px,y:py})
      
              while (trail.length > tail) {
                  trail.shift()
              }
      
      
              if (applex == px && appley == py) {
                tail++;
                applex = Math.floor(Math.random() * qp);
                appley = Math.floor(Math.random() * qp);
                
                pontosElement.innerHTML = ++pontos;
            }
      
    
          }

    window.addEventListener("keydown", function(e) {
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);

    let lastKeyPressed = ""

          function keyPush(e){
              switch (e.keyCode) {
                  case 37: // Left
          if(lastKeyPressed != "right"){
                      vx = -vel
                      vy = 0
          lastKeyPressed = "left"
            }
                      break
                  case 38: // up
          if(lastKeyPressed != "down"){
                      vx = 0
                      vy = -vel
          lastKeyPressed = "up"
          }
                      break
                  case 39: // right
          if(lastKeyPressed != "left"){
                      vx = vel
                      vy = 0
          lastKeyPressed = "right"
          }
                      break
                  case 40: // down
          if(lastKeyPressed != "up"){
                      vx = 0
                      vy = vel
          lastKeyPressed = "down"
          }
                      break
              }
          }

      }
