import { Application } from "https://cdn.skypack.dev/@splinetool/runtime@0.9.416";

const canvas = document.getElementById('canvas3d');

const app = new Application(canvas);

app.load('https://prod.spline.design/NSAjxdz9NJzZ8sZi/scene.splinecode');
