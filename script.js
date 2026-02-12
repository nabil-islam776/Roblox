const GRAVITY = 0.02;   // gravity acceleration
const JUMP_FORCE = 0.3; // initial jump velocity

// Player1 jump
if(keys[" "] && !isJumping1){
    velocityY1 = JUMP_FORCE;
    isJumping1 = true;
}
velocityY1 -= GRAVITY;  // gravity
player1.position.y += velocityY1;

// Ground collision
if(player1.position.y <= 0.5){
    player1.position.y = 0.5;
    velocityY1 = 0;
    isJumping1 = false;
}


