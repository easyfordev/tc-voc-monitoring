import React, { Component } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux'; // react 컴포넌트에서 redux를 사용하기 위해
import { fetchAnalysisData } from '../../actions/index'; // 호출할 특정 ActionCreator를 import

// MME -> MSS -> TAS -> SMSC -> PFX
class BarchartBoard extends Component {
    renderClass3Chart(data, title) {
    // renderClass3Chart() {
        const style = {position: 'absolute', left: '0', bottom: '0', height: '100%', width: '100%' };
        // const data = [ {name: '#1', past: 4000, now: 2400 }, {name: '#1', past: 4000, now: 2400 }, {name: '#1', past: 4000, now: 2400 }, {name: '#1', past: 4000, now: 2400 }, {name: '#1', past: 4000, now: 2400 }, {name: '#2', past: 4000, now: 2400 }, {name: '#3', past: 4000, now: 2400 }, {name: '#4', past: 4000, now: 2400 }, {name: '#5', past: 3000, now: 1398 }];
        let slicedData;
        if(data.length < 5) {
            slicedData = data.slice(0, data.length);
        } else {
            slicedData = data.slice(0,5);
        }
        // const title = "MME";

        return (
            <div className="Class3Chart" style={style}>
                <div id="barchart-title">{title}</div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={slicedData} margin={{top: 5, right: 5, left: 5, bottom: 20}}>
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
        console.log(this.props.analysisData[0]);

        return (
            <div className="BarchartBoard">
                <div className="BarChartOne">
                    {this.renderClass3Chart(this.props.analysisData[0].data, this.props.analysisData[0].basis )}
                </div>
                <div className="BarChartTwo">
                    {this.renderClass3Chart(this.props.analysisData[1].data, this.props.analysisData[1].basis )}
                </div>
                <div className="BarChartThree">
                    {this.renderClass3Chart(this.props.analysisData[2].data, this.props.analysisData[2].basis )}
                </div>
                <div className="BarChartFour">
                    {this.renderClass3Chart(this.props.analysisData[3].data, this.props.analysisData[3].basis )}
                </div>
                <div className="BarChartFive">
                    {this.renderClass3Chart(this.props.analysisData[4].data, this.props.analysisData[4].basis )}
                </div>
                <div className="BarChartSix">
                    {this.renderClass3Chart(this.props.analysisData[5].data, this.props.analysisData[5].basis )}
                </div>
                <div className="BarChartSeven">
                    {this.renderClass3Chart(this.props.analysisData[6].data, this.props.analysisData[6].basis )}
                </div>
                <div className="BarChartEight">
                    {this.renderClass3Chart(this.props.analysisData[7].data, this.props.analysisData[7].basis )}
                </div>
                <div className="BarChartNine">
                    {this.renderClass3Chart(this.props.analysisData[8].data, this.props.analysisData[8].basis )}
                </div>
                <div className="BarChartTen">
                    {this.renderClass3Chart(this.props.analysisData[9].data, this.props.analysisData[9].basis )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) { 
    return { analysisData: state.analysisData };  
}

export default connect(mapStateToProps, { fetchAnalysisData }) (BarchartBoard);
