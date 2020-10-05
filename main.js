// function main(){
//     var canvas = document.getElementById("myCanvas");
//     var gl = canvas.getContext("webgl");

//     var vertexShaderCode = `
//     void main(){

//     }
//     `;

//     var vertexShader = gl.createrShader(gl.VERTEX_SHADER);
//     gl.shaderSource(vertexShader, vertexShaderCode);
//     gl.compileShader(vertexShader);

//     var fragmentShaderCode = `
//     void main(){

//     }
//     `;

//     var fragmentShader = gl.createrShader(gl.FRAGMENT_SHADER);
//     gl.shaderSource(fragmentShader, fragmentShaderCode);
//     gl.compileShader(fragmentShader);
    
//     // beda vertex sama fragment
//     var shaderProgram = gl.createProgram();
//     gl.attachShader(shaderProgram, vertexShader);
//     gl.attachShader(shaderProgram, fragmentShader);
//     gl.linkProgram(shaderProgram);
//     gl.useProgram(shaderProgram);

//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);
// }

function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertexShaderCode = `
    void main() {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); //x,y,z,w
        gl_PointSize = 50.0;
    }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var fragmentShaderCode = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); //r,g,b,a dengan skala 0-1 (decimal)
    }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}