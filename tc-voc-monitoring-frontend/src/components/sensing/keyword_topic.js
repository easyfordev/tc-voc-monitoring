import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExcelData } from '../../actions';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
/* 
TODO 

1. redux로 데이터 받는 구조로 바꾸기 V
2. 엑셀 다운로드 V
3. 특정 유형 클릭하면, 해당 유형 키워드/토픽 나오도록 처리 -> Classification (조금 나중에! Page2하고 나서)
*/

class KeywordTopic extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            showTotalKeywordDetail: [ true, false, false, false, false ],
            showTotalTopicDetail: [ true, false, false, false, false ]
        }
        this.renderKeywordListItem = this.renderKeywordListItem.bind(this);
        this.renderVocItem = this.renderVocItem.bind(this);
        this.renderTopicVocItem = this.renderTopicVocItem.bind(this);
    }

    // 1. Keyword
    renderKeywordListItem(){
        const KeywordItems = this.props.totalKeyword.map( (keyword, index) => {
            return (
                <div key={keyword.keyword} >
                    <div className="boxitem" onClick={this.onClickTotalKeyword.bind(this, index)}>
                        <span id="number">{index +1}위</span>
                        <span id="text">{keyword.keyword}</span>
                        <button onClick={this.onClickKeywordExcelButton.bind(this, keyword.keyword)}>Excel</button>
                    </div> 
                    {this.renderVocItem(keyword.voclist, index)}
                </div>
            );
        });

        return <div>{KeywordItems}</div>;
    }

    renderVocItem(voclist, index) {
        const VocItems = voclist.map( (voc) => {
            return (
                <li className="vocitem" key={voc.id}>
                    <span>{voc.dt}</span>
                    <span>{voc.memo}</span>
                </li>
            );
        });
        return <div className={this.state.showTotalKeywordDetail[index] ? "boxdetail open" : "boxdetail"}>{VocItems}</div>;
    }

    onClickTotalKeyword(index){
        var temp = this.state.showTotalKeywordDetail;

        for(let i=0;i<5;i++) {
            if(i === index)
                temp[i] = true;
            else
                temp[i] = false;
        }
        this.setState({showTotalKeywordDetail: temp});
    }

    // 2. Topic(Key Sentence)
    renderTopicListItem(){
        const KeywordItems = this.props.totalTopic.map( (topic, index) => {
            return (
                <div key={topic.topic}>
                    <div className="boxitem" onClick={this.onClickTotalTopic.bind(this, index)}>
                        <span id="number">#{index +1}</span>
                        <span id="text">{topic.topic}</span>
                        <button>Excel</button>
                    </div> 
                    {this.renderTopicVocItem(topic.voclist, index)}
                </div>
            );
        });

        return <div>{KeywordItems}</div>;
    }
    renderTopicVocItem(voclist, index) {
        const VocItems = voclist.map( (voc) => {
            return (
                <li className="vocitem" key={voc.id}>
                    <span>{voc.dt}</span>
                    <span>{voc.memo}</span>
                </li>
            );
        });
        return <div className={this.state.showTotalTopicDetail[index] ? "boxdetail open" : "boxdetail"}>{VocItems}</div>;
    }

    onClickTotalTopic(index){
        var temp = this.state.showTotalTopicDetail;

        for(let i=0;i<5;i++) {
            if(i === index)
                temp[i] = true;
            else
                temp[i] = false;
        }

        this.setState({showTotalTopicDetail: temp});
    }
  
      
    onClickKeywordExcelButton(keyword){
        var rightNow = new Date();
        var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");

        this.props.fetchExcelData('keyword', keyword, res, (data)=> { // type, keyword, dt
            //******* 데이터 받아와서 수행할 작업들 적기 *******//

            // 해당 키워드의 전체 데이터 요청 (axios)
            // https://kimtaekju-study.tistory.com/301
            // https://soonh.tistory.com/38
            // https://blog.bitsrc.io/exporting-data-to-excel-with-react-6943d7775a92

            // 이거 어쩌면 타이밍 안맞을수도 있는데, 잘 맞춰서 테스트해봐야 함. this.props.excelData 이거 자체가 필요 없을수도 있음 !!
            // 그냥 여기서 axios를 치는거지

            // 받아온 데이터로 엑셀 다운로드
            const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const fileExtension = '.xlsx';
            const csvData = this.props.excelData.voclist;
            const fileName = 'test';

            const exportToCSV = (csvData, fileName) => { // 우왕 잘된다 ^0^
                const ws = XLSX.utils.json_to_sheet(csvData);
                const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
                const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
                const data = new Blob([excelBuffer], {type: fileType});
                FileSaver.saveAs(data, fileName + fileExtension);
            }

            exportToCSV(csvData,fileName);
        }); 

      
    }

    render() {
        return (
            <div className="KeywordTopic">
                <div className="Total">
                    <span className="maintitle">전체 유형</span>
                    <span className="subtitleone">평시대비 급상승 Keyword</span> 
                    <div className="left">
                        {this.renderKeywordListItem()}
                    </div>
                    <span className="subtitletwo">TOPIC 및 핵심 VoC</span>
                    <div className="right">
                        {this.renderTopicListItem()}
                    </div>
                </div>
                <div className="Specific">
                    <span className="maintitle">특정유형</span>
                    <span className="subtitleone">평시대비 급상승 Keyword</span> 
                    <div className="left">

                    </div>
                    <span className="subtitletwo">TOPIC 및 핵심 VoC</span>
                    <div className="right">

                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) { 
    return { totalKeyword : state.totalKeyword, totalTopic: state.totalTopic, excelData: state.excelData };  
}

export default connect(mapStateToProps, { fetchExcelData }) (KeywordTopic);
