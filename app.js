import{
	Ball
} from './ball.js';

import{
	Block
} from './block.js';
class App{
	constructor(){
		//캔버스를 스크립트로 만들고 context를 가져온다
		this.canvas=document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		
		document.body.appendChild(this.canvas);
		
		//윈도우에 resize 이벤트 걸어놓기
		window.addEventListener('resize', this. resize.bind(this), false);
		this.resize();
		
		//볼, 블록 생성
		this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
		this.block = new Block(700, 30, 300, 450);
		
		window.requestAnimationFrame(this.animate.bind(this));
	}	
	//스크린 사이즈를 가져오는 함수를 먼저 정의해주고 작업을 하는게 유지보수에 유리
	resize(){
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;
		
		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;
		this.ctx.scale(2, 2);
	}
	
	animate(t) {
		window.requestAnimationFrame(this.animate.bind(this));
		
		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
		
		this.block.draw(this.ctx);
		this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
		
	}
}

window.onload=() => {
	new App();
}