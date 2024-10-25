import { Link } from 'react-router-dom';
import '../stylesheets/discernBrainstorm.css';

export function DiscernBrainstorm() {
    /*var activateDraw = (ref) => {
        const mctx = ref.getContext('2d');
        var displayWidth = (window.innerWidth-250)*.8;
        var displayHeight = window.innerHeight*.5;
        ref.style.width = displayWidth + 'px';
        ref.style.height = displayHeight + 'px';
        ref.width = displayWidth * 2;
        ref.height = displayHeight * 2;

        mctx.beginPath();
        mctx.font = '25px san serif';
        mctx.fillText('How Might Jesus Address',ref.width*.5,ref.height*.5);
        mctx.fillText('________?',ref.width*.5,ref.height*.5+25)
        //mctx.rect(ref.width*.5-25,ref.height*.5-10,50,20);
        //mctx.stroke();

        mctx.strokeStyle = '#A00000';
        mctx.lineJoin = 'round';
        mctx.lineCap = 'round';
        mctx.lineWidth = 100;

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        let hue = 0;
        let direction = true;

    
        function draw(e) {
        if (!isDrawing) return; // stop the fn from running when they are not moused down
        console.log(e);
        mctx.strokeStyle = `hsl(${hue%60}, 100%, 50%)`;
        mctx.beginPath();
        // start from
        mctx.moveTo(lastX, lastY);
        // go to
        mctx.lineTo(e.offsetX, e.offsetY);
        mctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    
            hue++;
    
        if (mctx.lineWidth >= 100 || mctx.lineWidth <= 10) {
            direction = !direction;
        }
    
        if(direction) {
            mctx.lineWidth++;
        } else {
            mctx.lineWidth--;
        }
    
        }
    
        ref.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        });
    
    
        ref.addEventListener('mousemove', draw);
        ref.addEventListener('mouseup', () => isDrawing = false);
        ref.addEventListener('mouseout', () => isDrawing = false);
    }
    var activateCanvas = (<canvas id ='mindMap' ref={(e) => activateDraw(e)}></canvas>)*/


    return (
        <>
            <div id="oTopImage">
                <h3 class="oTitle"><sc>BRAINSTORM</sc></h3>
            </div>
            <div className='body'>
                {/*activateCanvas*/}
                <h1>Generate Solutions</h1>
            </div>
        </>
    )
}