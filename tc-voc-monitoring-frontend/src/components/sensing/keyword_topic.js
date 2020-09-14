import React, { Component } from 'react';

/* 
TODO 

1. redux로 데이터 받는 구조로 바꾸기
2. 엑셀 다운로드
3. 특정 유형 클릭하면, 해당 유형 키워드/토픽 나오도록 처리 -> Classification

*/
class KeywordTopic extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            totalKeyword: [
                {   keyword: '카카오톡', 
                    voclist: [ {id: '1', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '2', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '3', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   keyword: '초기화', 
                    voclist: [ {id: '4', dt: '20200910', hhmmss: '102023', memo: '초기화 안내. 고층 특성 안내 어쩌고'},
                    {id: '5', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '6', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   keyword: '중계기', 
                    voclist: [ {id: '7', dt: '20200910', hhmmss: '102023', memo: '중계기 고장난듯 불량. 고저쩌고'},
                    {id: '8', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '9', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   keyword: '이용', 
                    voclist: [ {id: '10', dt: '20200910', hhmmss: '102023', memo: '이용 실패 쩌고'},
                    {id: '11', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '12', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   keyword: '동일', 
                    voclist: [ {id: '13', dt: '20200910', hhmmss: '102023', memo: '동일 동일 저꼬저쩌고저쩌고'},
                    {id: '14', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '15', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                }
            ],
            showTotalKeywordDetail: [ true, false, false, false, false ],
            totalTopic: [
                {   topic: '카카오톡, 카톡, 오류, 장애, 정상', 
                    voclist: [ {id: '1', dt: '20200910', hhmmss: '102023', memo: '카카오톡 어쩌고 저쩌고'},
                    {id: '2', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '3', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   topic: '연락, 추가, 불량, 상호명, 요청', 
                    voclist: [ {id: '4', dt: '20200910', hhmmss: '102023', memo: '초기화 안내. 고층 특성 안내 어쩌고'},
                    {id: '5', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '6', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   topic: '위치, 통화, 데이터, 불량, 권유', 
                    voclist: [ {id: '7', dt: '20200910', hhmmss: '102023', memo: '중계기 고장난듯 불량. 고저쩌고'},
                    {id: '8', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '9', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   topic: '데이터, 초기화, 정상, 위치, 설정', 
                    voclist: [ {id: '10', dt: '20200910', hhmmss: '102023', memo: '이용 실패 쩌고'},
                    {id: '11', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '12', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                },
                {   topic: '불량, 특이, 품질, 통화, 기타', 
                    voclist: [ {id: '13', dt: '20200910', hhmmss: '102023', memo: '동일 동일 저꼬저쩌고저쩌고'},
                    {id: '14', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'},
                    {id: '15', dt: '20200910', hhmmss: '102023', memo: '자택 내 통화품질 불량. 고층 특성 안내 어저꼬저쩌고저쩌고'}
                    ] 
                }
            ],
            showTotalTopicDetail: [ true, false, false, false, false ]
        }
        this.renderKeywordListItem = this.renderKeywordListItem.bind(this);
        this.renderVocItem = this.renderVocItem.bind(this);
        this.renderTopicVocItem = this.renderTopicVocItem.bind(this);
    }

    // 1. Keyword
    renderKeywordListItem(){
        const KeywordItems = this.state.totalKeyword.map( (keyword, index) => {
            return (
                <div>
                    <div className="boxitem" key={keyword.keyword} onClick={this.onClickTotalKeyword.bind(this, index)}>
                        <span id="number">{index +1}위</span>
                        <span id="text">{keyword.keyword}</span>
                        <button>Excel</button>
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
        const KeywordItems = this.state.totalTopic.map( (topic, index) => {
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

export default KeywordTopic;
