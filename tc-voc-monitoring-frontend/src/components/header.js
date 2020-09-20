import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import a from '../style/5gxlogo'
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { menuSelected: [ true, false ] }
    }

    componentDidMount(){        
        const pathname = this.props.location.pathname;

        var temp = this.state.menuSelected;
        
        if(pathname.length === 1) { // 루트로 들어오면
            temp[0] = true; temp[1] = false;
        } else { // Analysis로 들어오면
            temp[0] = false; temp[1] = true;
        }
        this.setState({menuSelected: temp});
    }

    onClickMenuItem(index){
        var temp = this.state.menuSelected;

        for(let i=0;i<2;i++) {
            if(i === index)
                temp[i] = true;
            else
                temp[i] = false;
        }

        this.setState({menuSelected: temp});
    }

    render() {
        return (
            <div className="Header">
                <img id="logoimg" src={require('../resources/5gxlogo.png')} alt="logo" width="60px" height="20px"></img> 
                <span className="logo">AI기반 VoC 실시간 분석</span>
                <Link className={this.state.menuSelected[0] ? "menu active" : "menu"} to="/" onClick={this.onClickMenuItem.bind(this,0)}>
                    상담유형/키워드
                </Link>
                <Link className={this.state.menuSelected[1] ? "menu active" : "menu"} to={`/analysis/${this.props.selectedClass2}`} onClick={this.onClickMenuItem.bind(this,1)}>
                    장비상세분석
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) { 
    return { selectedClass2 : state.selectedClass2 };  
}

export default withRouter(
    connect(mapStateToProps)(Header)
)
;