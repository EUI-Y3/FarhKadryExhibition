import React from 'react';
import '@google/model-viewer';
import model1 from '../../assets/models/model1.glb'
import './model1.css'
const Model1 = () => {
    return ( <>
    <model-viewer className="model1 rotate scrollAnimate2" src={model1} camera-controls  tone-mapping="neutral" poster="poster.webp" shadow-intensity="0.76" exposure="0.98" shadow-softness="0.54" camera-orbit="210deg 68deg 0.8m" 
    disable-zoom
    alt="3d model of a traditional ornament plate"
  disable-tap
progress-bar="hidden"
  interaction-prompt="none"
    field-of-view="28deg" auto-rotate> </model-viewer>

    </> );
}
 
export default Model1;