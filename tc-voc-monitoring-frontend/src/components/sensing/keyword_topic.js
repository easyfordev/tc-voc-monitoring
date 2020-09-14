import React, { Component } from 'react';
import { connect } from 'react-redux';

/* 
TODO 

1. redux로 데이터 받는 구조로 바꾸기 V
2. 엑셀 다운로드 
3. 특정 유형 클릭하면, 해당 유형 키워드/토픽 나오도록 처리 -> Classification
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
                <div>
                    <div className="boxitem" key={keyword.keyword} onClick={this.onClickTotalKeyword.bind(this, index)}>
                        <span id="number">{index +1}위</span>
                        <span id="text">{keyword.keyword}</span>
                        <button onClick={this.onClickKeywordExcelButton}>Excel</button>
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
                <div>
                    <div className="boxitem" key={topic.topic} onClick={this.onClickTotalTopic.bind(this, index)}>
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

    onClickKeywordExcelButton(){
        console.log("Clicked!");
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
    return { totalKeyword : state.totalKeyword, totalTopic: state.totalTopic };  
}

export default connect(mapStateToProps) (KeywordTopic);
