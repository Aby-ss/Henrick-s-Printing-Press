import { Application } from "https://cdn.skypack.dev/@splinetool/runtime@0.9.416";

const canvas1 = document.getElementById('product');
const app1 = new Application(canvas1);
app1.load('https://prod.spline.design/NSAjxdz9NJzZ8sZi/scene.splinecode');

const canvas2 = document.getElementById('box');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/YmD5GmNpdV1D0Ghg/scene.splinecode');

