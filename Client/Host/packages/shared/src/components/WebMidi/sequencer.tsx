// import React from 'react';
// // import MidiScript from './MidiScript';
// import './sequencerR.js';

// interface IOwnProps {

// }

// const SequencerTT: React.FC<IOwnProps> = (props) => {

//     // return (
//     //     <div>
//     //         <span>hey??</span>
//     //     </div>
//     // )

//     return (
//         <div className="container-fluid clock">
//             <div className="row">
//                 <div className="col-xs-12 col-md-12 col-centered text-center">
//                     <h1>MIDI Sequencer</h1>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-xs-12 col-md-12 col-centered text-center">
//                     <select id="midiOut" className="selectpicker">
//                         <option value="">Not connected</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-4"></div>

//                 <div className="col-xs-3 col-md-1">
//                     <h3>BPM</h3>
//                 </div>
//                 <div className="col-xs-3 col-md-1">
//                     <h3>Divide</h3>
//                 </div>
//                 <div className="col-xs-3 col-md-2">
//                     <h3 style={{ marginLeft: 10 }}>Control</h3>
//                 </div>
//                 <div className="col-md-4"></div>
//             </div>
//             <div className="row">
//                 <div className="col-md-4"></div>
//                 <div className="col-xs-3 col-md-1">
//                     <select id="bpm" name="bpm"></select>
//                 </div>
//                 <div className="col-xs-3 col-md-1">
//                     <select id="division" name="division">
//                         <option value="48" selected>Half</option>
//                         <option value="24">Qtr</option>
//                         <option value="12" selected>8th</option>
//                         <option value="6">16th</option>
//                         <option value="3">32nd</option>
//                     </select>
//                 </div>
//                 <div className="col-xs-3 col-md-2">
//                     <a id="play" href="#" className="push_button blue" style={{ marginTop: 35 }}></a>
//                 </div>
//                 <div className="col-md-4"></div>
//             </div>
//             <br />
//             <div className="row">
//                 <div className="col-xs-4 col-md-2 col-lg-2">
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 30, marginLeft: 7 }}>
//                         <img id="octUp7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA2FBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw1Xz6fAAAAR3RSTlMAAQIEBQwOERIVFxslJicpKywuMDEyNTY3ODk6PT9ARUpLT1BVVlhZW15fYWJjZGeDhZKVm7K1yMzP0dPe4uTo6+3v9ff7/fnonpQAAAC6SURBVBgZXcEJO0JRFIbR72SWIi6ZM4UiklldF1e9//8f2e3Ok2otubDdySDrJEFj5U+idE3RPRNacndMacisM3LbYqQkhRR3JB3jekGbuH2ZA9yGHhjakasy1NYHZktRgnlXDoOKzOmJTGUAub5gV+YczmQOIdMLJJLqmAtJe/CsG+iXdI27UrkPDS1jukRdzJL0xIxHSfMpU3pzMqu/TMhX5BbfGHtdUFS4/MF914P+hWKt2awVg9wfy5VDXy3ewk0AAAAASUVORK5CYII=" alt="OctUp" />
//                     </div>
//                 </div>
//             </div>
//             <br />
//             <div className="row">
//                 <div className="col-xs-4 col-md-2 col-lg-2">
//                     <a id="octaveUpAll" href="#" className="push_button blue"></a>
//                     <a id="octaveDownAll" href="#" className="push_button blue"></a>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note0"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note1"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note2"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note3"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note4"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note5"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note6"></select>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <select id="note7"></select>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-xs-4 col-md-2 col-lg-2">
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//                 <div className="col-xs-1 col-md-2 col-lg-1">
//                     <div className="image" style={{ marginTop: 10, marginLeft: 7 }}>
//                         <img id="octDown7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAxlBMVEUAAAA0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdw0sdz9TyvAAAAAQXRSTlMAAQIDBAYHCAkKCw4VGhwkJio7PkdMTldcaWtvgIOJjo+SlJWio6WmqKqwsrW3urzAzM/R1dna3ODi5Obz9ff5/QxS3+UAAADBSURBVBgZXcELW8FQAMfhn3NmG6ZSVLroQleETFO6/b//l3J2PPaM98WrX6zkrLp1CucqnLFhnlTyYMj1teMWp6M9bQh+tOfbciKpl0zlTZOepGP60hXYiZw3C9fSPZmUAHYsjQxwIH3wJ82qgBm+GqA6k375kvQeAsYA4VzSJ49y0ggvSuUMOFVuEePEC+U6xPKyGtQy5f4juJS3bDSW8rpAZaId4wpOlKpkHuLZOxVuDFtHL/KeDykLmq1WM2BjDflVPCqL7/aCAAAAAElFTkSuQmCC" alt="OctDown" />
//                     </div>
//                 </div>
//             </div>
//             <br />
//         </div>
//     )
// }

// export default SequencerTT