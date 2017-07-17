import React from 'react';
import ReactDOM from 'react-dom';

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/title')

export default class Bar extends React.Component {

  constructor(props) {
    super(props)
    this.setBarOption = this.setBarOption.bind(this)
    this.initBarChart = this.initBarChart.bind(this)
  }

  initBarChart() {
    const data=this.props.data;
    let name=[]
    let value=[]
    for(let item of data){
      name.push(item.name)
      value.push(item.value)
    }
    let myChart = echarts.init(this.refs.barChart)
    let options = this.setBarOption(name,value)
    myChart.setOption(options)
  }

  componentDidMount() {
    this.initBarChart()
  }

  componentDidUpdate() {
    this.initBarChart()
  }


  render() {
    return (
      <div className="bar-react">
      <div ref="barChart" style={{width: "100%", height: "100%"}}></div>
      </div>
    )
  }

  setBarOption(name,value) {
    return {
      title: {
        text: this.props.title,
        left: "center"
      },
      xAxis: [{
        type: 'category',
        data:name
      }],
      yAxis : [{
          type : 'value'
      }],
      series: [{
        name: '比例',
        type: 'bar',
        data: value
      }]
    }
  }
}
