export class Block{
    constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        //공을 추적하기 위해서 maximum 지정
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx){
        const xGap = 80;
        const yGap = 60;
        //메인 블록
        ctx.fillStyle = '#505050';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        //아래 그림자
        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();
        //옆 그림자
        ctx.fillStyle = '#9d0919';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        ctx.fill();
    }
}