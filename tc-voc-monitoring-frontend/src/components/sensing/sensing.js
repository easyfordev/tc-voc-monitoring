import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'; // react 컴포넌트에서 redux를 사용하기 위해
import { fetchPeriod } from '../../actions/index'; // 호출할 특정 ActionCreator를 import

import Classification from './classification';
import KeywordTopic from './keyword_topic';

class Sensing extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            radioGroup: { one: false, two: false, three: true, four: false }
        };

        this.handleRadio = this.handleRadio.bind(this);
    }

    onSubmit(values) {
        // console.log(values);
        this.props.fetchPeriod(values.period); // State 변경하는 Action Creator 호출
        // console.log(this.props.period); // state 변경되었나 확인 (조금 나중에 변경된다)
        // this.props.createPost(values, () => {
        //     this.props.history.push('/'); // Callback 함수 내용 정의, Action Creator가 얘를 호출함
        // });
    }

    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked; // true
        this.setState({radioGroup: obj});
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="Sensing">
                <form className="Filter" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <span>
                        <label>조회 기간</label>
                        <label>
                            <Field name="period" component="input" type="radio" value="30m" checked={this.state.radioGroup['one']} onChange={this.handleRadio}/>{' '}
                            30분
                        </label>
                        <label>
                            <Field name="period" component="input" type="radio" value="1h" checked={this.state.radioGroup['two']} onChange={this.handleRadio}/>{' '}
                            1시간
                        </label>
                        <label>
                            <Field name="period" component="input" type="radio" value="3h" checked={this.state.radioGroup['three']} onChange={this.handleRadio}/>{' '}
                            3시간(Default)
                        </label>
                        <label>
                            <Field name="period" component="input" type="radio" value="1d" checked={this.state.radioGroup['four']} onChange={this.handleRadio}/>{' '}
                            1일
                        </label>
                    </span>
                    <button type="submit">OK</button>
                </form>
                <Classification />
                <KeywordTopic />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { period: state.period }; 
}

export default reduxForm({
    form: 'FilterForm'
})
(
    connect(mapStateToProps, { fetchPeriod })(Sensing)
);