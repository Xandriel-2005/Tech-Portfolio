import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vsSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

    const fsSource = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;

    // Hash function
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    // 2D Noise
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }

    // Fractional Brownian Motion
    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < 5; ++i) {
        v += a * noise(p);
        p = rot * p * 2.0 + vec2(0.5, 0.5);
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      vec2 mouseNorm = (u_mouse.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

      // Mouse interactive distance
      float mouseDist = length(p - mouseNorm);
      float mouseGlow = exp(-mouseDist * 3.2);

      // Deep quantum cosmic indigo / violet obsidian base
      vec3 bgDeep = vec3(0.035, 0.03, 0.09);
      vec3 bgAlt = vec3(0.055, 0.04, 0.14);
      vec3 col = mix(bgDeep, bgAlt, uv.y + 0.2 * sin(u_time * 0.4));

      // Quantum cyber grid
      vec2 gridUV = abs(fract(p * 4.0 - vec2(0.0, u_time * 0.08)) - 0.5);
      float gridLine = smoothstep(0.04, 0.0, min(gridUV.x, gridUV.y));
      col += vec3(0.18, 0.12, 0.35) * gridLine * 0.7;

      // Complex quantum wave & neural pulses
      vec2 q = vec2(
        fbm(p + vec2(0.0, u_time * 0.05)),
        fbm(p + vec2(u_time * 0.04, 0.0))
      );
      vec2 r = vec2(
        fbm(p + 1.8 * q + vec2(1.7, 9.2) + 0.15 * u_time),
        fbm(p + 1.8 * q + vec2(8.3, 2.8) + 0.126 * u_time)
      );
      float f = fbm(p + 2.0 * r);

      // Palette: Electric Quantum Violet (#8a3ffc) into Holographic Cyan (#00f2fe)
      vec3 violetWave = vec3(0.54, 0.25, 0.99);
      vec3 cyanWave = vec3(0.0, 0.95, 0.99);
      vec3 waveColor = mix(violetWave, cyanWave, clamp(f * f * 2.0, 0.0, 1.0));
      col += waveColor * pow(f, 2.6) * 1.35;

      // Mouse interactive glow aura
      vec3 mouseAura = mix(vec3(0.54, 0.25, 0.99), vec3(0.0, 0.9, 0.98), 0.6);
      col += mouseAura * mouseGlow * 0.22;

      // Node sparks / qubit points pulsing with quantum frequency
      vec2 cellId = floor(p * 6.0);
      vec2 cellUv = fract(p * 6.0) - 0.5;
      float sparkRnd = hash(cellId);
      if (sparkRnd > 0.65) {
        float pulse = sin(u_time * 3.0 + sparkRnd * 6.28) * 0.5 + 0.5;
        float d = length(cellUv);
        float spark = smoothstep(0.08 * pulse, 0.0, d);
        vec3 sparkColor = mix(vec3(0.0, 0.95, 0.99), vec3(0.9, 0.2, 0.8), sparkRnd);
        col += sparkColor * spark * (1.2 + pulse * 1.5);
      }

      // Vignette with rich deep indigo falloff towards edges
      float vignette = smoothstep(1.6, 0.4, length(p));
      vec3 vignetteIndigo = vec3(0.02, 0.015, 0.05);
      col = mix(vignetteIndigo, col, vignette);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }

    const positionLocation = gl.getAttribLocation(program, 'position');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const onMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = window.innerHeight - e.clientY;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = window.innerHeight - e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    function resize() {
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    }

    window.addEventListener('resize', resize);
    resize();

    let animationFrameId;

    function render(time) {
      time *= 0.001; // seconds

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      
      // Cleanup WebGL resources
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
