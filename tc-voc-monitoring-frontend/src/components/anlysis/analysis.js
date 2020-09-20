import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'; // react 컴포넌트에서 redux를 사용하기 위해
import { fetchPeriod, fetchSelectedClass2 } from '../../actions/index'; // 호출할 특정 ActionCreator를 import
import Header from '../header';

import BarchartBoard from './barchart_board';

// MME -> MSS -> TAS -> SMSC -> PFX
// TODO : selectedClass2라는 state가 변경되도록 하기

class Analysis extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            radioGroup: { one: false, two: false, three: false, four: true },
            selectedClass2: this.props.match.params.class2
        }

        this.handleRadio = this.handleRadio.bind(this);
        this.renderSelectOptions = this.renderSelectOptions.bind(this);
    }

    componentDidUpdate(){
        // console.log("State값 확인 : " + this.props.selectedClass2);
    }

    onSubmit(values) {
        this.props.fetchSelectedClass2(values.selectClass2, (value) => {
            this.props.history.push(`/analysis/${value}`);
            this.setState({ selectedClass2: value});
        });
    }

    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked; // true
        this.setState({radioGroup: obj});
    }

    renderSelectOptions(){
        const class2NameList = this.props.class2.map( (item) => {
            return (
                <option key={item.name} value={item.name}>
                    {item.name}
                </option>
            );
        });
        return (
            <Field name="selectClass2" component="select">
                {class2NameList}
            </Field>
        );
            
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="Analysis">
                <Header></Header>
                <div className="filter">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <span>
                            <label className="filter-title">상담유형 대분류</label>
                            {this.renderSelectOptions()}
                        </span>
                        <span className="type-filter">
                            <label className="filter-title">조회 타입</label>
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
                                3시간
                            </label>
                            <label>
                                <Field name="period" component="input" type="radio" value="1d" checked={this.state.radioGroup['four']} onChange={this.handleRadio}/>{' '}
                                1일(Default)
                            </label>
                        </span>
                        <button class="submit-button" type="submit">OK</button>
                    </form>
                </div>
                <BarchartBoard></BarchartBoard>
            </div>
        );
    }
}

let InitializeFromStateForm = reduxForm({
    form: 'FilterForm',
    enableReinitialize: true
})(Analysis);

InitializeFromStateForm = connect(
  state => ({
    period: state.period, 
    class2: state.class2, 
    selectedClass2: state.selectedClass2, 
    initialValues: { selectClass2: state.selectedClass2}
  }),
  { fetchPeriod, fetchSelectedClass2 }
)(InitializeFromStateForm);

export default InitializeFromStateForm;