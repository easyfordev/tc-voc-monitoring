import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClass2, fetchClass3, fetchSelectedClass2 } from '../../actions';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import {withRouter} from 'react-router-dom';


class Classification extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        // this.onDoubleClickClass2Chart = this.onDoubleClickClass2Chart.bind(this);
        // this.onInputChange = this.onInputChange.bind(this);  // 함수 안에서 this가 뭔지 알 수 있도록 꼭 넘겨줘야 함!
        this.renderClass2Chart = this.renderClass2Chart.bind(this);
    }

    componentDidMount(){
        // console.log(this.props.class3);
        this.props.fetchClass2();
        this.props.fetchClass3();
    }

    onDoubleClickClass2Chart(name){
        this.props.fetchSelectedClass2(name, (value) => {
            this.props.history.push(`/analysis/${name}`);
        });
    }
    
    renderClass2Chart(data) { // data is object
        // var style2 = {position: 'absolute', bottom: '18%', left:'2%', width: '16%', height: '30%', backgroundColor: '#afbed1'};
        // var style3 = {position: 'absolute', bottom: '18%', left:'6%', width: '8%', height: '80%', backgroundColor: '#386fa4'}; // MAX 높이 : 80% 상수 고정
        // var verticalLineStyle = {position: 'absolute', top: '0', left:'20%', width: '2%', height: '100%', backgroundColor: '#FFFFFF'};  
        // var textStyle = {position: 'absolute', bottom: '2%', left:'1%', width: '20%', fontSize: '12px', color: 'black', fontWeight: 'bold', textAlign: 'center'};
        const style = {position: 'absolute', left: '0', top: '0', height: '100%', width: '21%', borderRight: '5px solid white' };
        var dataArray = [];
        dataArray.push(data);

        // const data = [ {name: 'HDVoice', past: 1000, now: 2900 }];

        return(
            <div className="Class2Chart" style={style} onDoubleClick={this.onDoubleClickClass2Chart.bind(this, dataArray[0].name)}>
                {/* <div style={style2}></div>
                <div style={style3}></div>
                <span style={textStyle}>HDVoice품질</span>
                <div className="VerticalLine" style={verticalLineStyle}></div> */}
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataArray} margin={{top: 5, right: 5, left: 5, bottom: 10}}>
                        <XAxis dataKey="name" xAxisId={0} hide/>
                        <XAxis dataKey="name" xAxisId={1} tick={{fontWeight: 'bolder', fontSize: 12, fill: 'black', whiteSpace: 'pre-line'}} interval={0} />
                        <Tooltip/>
                        <Bar dataKey="past" xAxisId={0} fill="#afbed1" />
                        <Bar dataKey="now" xAxisId={1} fill="#386fa4" barSize={25} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }

    renderClass3Chart(data) {
        const style = {position: 'absolute', left: '21%', top: '0', height: '100%', width: '79%' };
        // const data = [ {name: '발수신불가', past: 4000, now: 2400 }, {name: '음질불량', past: 3000, now: 1398 }];
        
        return (
            <div className="Class3Chart" style={style}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{top: 5, right: 5, left: 5, bottom: 10}}>
                        {/* <CartesianGrid strokeDasharray="3 3"/> */}
                        <XAxis dataKey="name" xAxisId={0} hide/>
                        <XAxis dataKey="name" xAxisId={1} tick={{fontSize: 12}} interval={0} />
                        {/* <YAxis/> */}
                        <Tooltip/>
                        {/* <Legend /> */}
                        <Bar dataKey="past" xAxisId={0} fill="#afbed1" />
                        <Bar dataKey="now" xAxisId={1} fill="#84d2f6" barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }

    render() {
        return (
            <div className="Classification">
                <div className="BarChartOne">
                   {this.renderClass2Chart(this.props.class2[0])} {this.renderClass3Chart(this.props.class3[this.props.class2[0].name])}
                </div>
                <div className="BarChartTwo">
                   {this.renderClass2Chart(this.props.class2[1])} {this.renderClass3Chart(this.props.class3[this.props.class2[1].name])}
                </div>
                <div className="BarChartThree">
                   {this.renderClass2Chart(this.props.class2[2])} {this.renderClass3Chart(this.props.class3[this.props.class2[2].name])}
                </div>
                <div className="BarChartFour">
                   {this.renderClass2Chart(this.props.class2[3])} {this.renderClass3Chart(this.props.class3[this.props.class2[3].name])}
                </div>
                <div className="BarChartFive">
                   {this.renderClass2Chart(this.props.class2[4])} {this.renderClass3Chart(this.props.class3[this.props.class2[4].name])}
                </div>
                <div className="BarChartSix">
                   {this.renderClass2Chart(this.props.class2[5])} {this.renderClass3Chart(this.props.class3[this.props.class2[5].name])}
                </div>
                <div className="BarChartSeven">
                   {this.renderClass2Chart(this.props.class2[6])} {this.renderClass3Chart(this.props.class3[this.props.class2[6].name])}
                </div>
                <div className="BarChartEight">
                   {this.renderClass2Chart(this.props.class2[7])} {this.renderClass3Chart(this.props.class3[this.props.class2[7].name])}
                </div>
                <div className="BarChartNine">
                   {this.renderClass2Chart(this.props.class2[8])} {this.renderClass3Chart(this.props.class3[this.props.class2[8].name])}
                </div>
                <div className="BarChartTen">
                   {this.renderClass2Chart(this.props.class2[9])} {this.renderClass3Chart(this.props.class3[this.props.class2[9].name])}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) { 
    return { class2 : state.class2, class3: state.class3 }; // { weather } === { weather: weather } 
}


export default withRouter(
    connect(mapStateToProps, { fetchClass2, fetchClass3, fetchSelectedClass2 }) (Classification)
);