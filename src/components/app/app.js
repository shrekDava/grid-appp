import React, { Component } from 'react'
import Header from '../header'
import InfoPanel from '../info-panel'
import TabPanel from '../tab-panel'
import Grid from '../grid'
import './app.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class App extends Component {
  state = {
    gridData : {
        leftData: [
            {id: 0, title: 'Left 0'},
            {id: 1, title: 'Left 1'},
            {id: 2, title: 'Left 2'},
        ],
        middleData: [
            {id: 3, title: 'Middle 0'},
            {id: 4, title: 'Middle 1'},
            {id: 5, title: 'Middle 2'},
        ],
        rightData: [
            {id: 6, title: 'Right 0'},
            {id: 7, title: 'Right 1'},
            {id: 8, title: 'Right 2'},
        ]
    }
  };  
  onMoveTo = (id) =>{

    console.log("ggg")
    /*this.setState(({ gridData }) => {
      const data = gridData.middleData
      const idx = data.findIndex((el) => el.id === id)
      const newArray = [
        ...gridData[middleData.slice(0,idx),
        ...gridData.slice(idx + 1)
      ]

      return {
        todoData: newArray
      }
    })*/

  }

  render() {
      const { gridData }  = this.state
      const leftData  = gridData.leftData 
      const middleData = gridData.middleData 
      const rightData = gridData.rightData 
      const isInfo = true 
      const isLeft = true 
      const isRight = true 
      const isMiddle = true 

      return (<div><Router>
                  <div className="stardb-app">
                    <Header />
                    <div className = "info">
                      <Grid gridData={ leftData }  isInfo = { isInfo} isLeft = { isLeft } 

                      />
                      <Grid gridData={ middleData}  isInfo = { isInfo}  isMiddle = { isMiddle } 
                        onMoveTo = { this.onMoveTo }
                      />
                      <Grid gridData={ rightData }   isInfo = { isInfo} isRight = { isRight }/>
                    </div>
                   
                          
                    <TabPanel />
                  

                    <Route    path ="/" 
                          render = {() => {return <Grid  gridData={ leftData }/>} } 
                          exact />
                    <Route    path="/left/" render = {() => {return <Grid  gridData={ leftData }  isLeft = { isLeft } />} } />
                    <Route    path="/middle/" render = {() => {return <Grid  gridData={ middleData } isMiddle = { isMiddle }  
                               onMoveTo = { this.onMoveTo }
                               />} }   />
                    <Route    path="/right/"  render = {() => {return <Grid  gridData={ rightData } isRight = { isRight } />} }  />
                  </div>
            </Router>
            </div>
      )
    
  }
}
/*
  <Route    path ="/" 
                          render = {() => {return <Grid  gridData={ leftData }/>} } 
                          exact />
 <Route    path="/left/" render = {() => {return <Grid  gridData={ leftData }  isLeft = { isLeft } />} } />
                    <Route    path="/middle/" render = {() => {return <Grid  gridData={ middleData } isMiddle = { isMiddle } />} }   />
                    <Route    path="/right/"  render = {() => {return <Grid  gridData={ rightData } isRight = { isRight } />} }  />
*/
