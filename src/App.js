import React from 'react';
import * as THREE from 'three'
// 引入样式
import './App.css';
import 'antd/dist/antd.css';
import './assets/css/App.css';

// 根组件
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.initThreeScene = this.initThreeScene.bind(this)
  }

  componentDidMount() {
    this.initThreeScene()
  }

  // 初始化 3d 场景
  initThreeScene() {
    let scene = new THREE.Scene()
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    let render = new THREE.WebGLRenderer()

    render.setSize(window.innerWidth, window.innerHeight)

    let gridHelper = new THREE.GridHelper(200, 25)
    scene.add(gridHelper)

    const element = document.getElementById('app')
    element.append(render.domElement)
  }

  render() {
    return (
        <div id='app'></div>
    )
  }
};

