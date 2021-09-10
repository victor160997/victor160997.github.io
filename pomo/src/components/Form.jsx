import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInfoTimeAction, resetAction } from '../actions';
import YoutubeJazz from './YoutubeJazz';
import YoutubeConcentration from './YoutubeConcentration';
import YoutubeOpera from './YoutubeOpera';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWork: 25,
      pausaCurta: 5,
      pausaLonga: 30,
      ciclos: 8,
      ativo: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickInfo = this.handleClickInfo.bind(this);
    this.handleInterruption = this.handleInterruption.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { pomodoro } = this.props;
    if (prevState.ativo === true && pomodoro.ativo === false) {
      this.setState({ ativo: false });
    }
  }

  handleChange(event) {
    const key = event.target.name;
    this.setState({ [key]: event.target.value })
  }

  handleClickInfo() {
    const { timeWork, pausaCurta, pausaLonga, ciclos } = this.state;
    const { getInfoTimeProps } = this.props;
    if (Number(timeWork) < 25 || Number(timeWork) > 50) {
      return alert('É recomendado que o tempo de foco seja de 25 a 50 minutos!')
    } else if (Number(pausaCurta) < 5 || Number(pausaCurta) > 10){
      return alert('É recomendado que o tempo de pausa curta seja de 5 a 10 minutos!')
    } else if (Number(pausaLonga) < 20 || Number(pausaLonga) > 45){
      return alert('É recomendado que o tempo de pausa longa seja de 20 a 45 minutos!')
    } else if (Number(ciclos) < 2 || Number(ciclos) > 8){
      return alert('É recomendado que seja feito de 2 a 8 ciclos!')
    }
    getInfoTimeProps({ timeWork, pausaCurta, pausaLonga, ciclos, ativo: true });
    this.setState({ ativo: true })
  }

  handleInterruption() {
    const { getInfoTimeProps } = this.props;
    this.setState({
      timeWork: 25,
      pausaCurta: 5,
      pausaLonga: 30,
      ciclos: 8,
      ativo: false,
      selectMusic: '',
    });
    getInfoTimeProps({ timeWork: 25,
      pausaCurta: 5,
      pausaLonga: 30,
      ciclos: 8,
      ativo: false, });
  }

  render() {
    const { timeWork, pausaCurta, pausaLonga, ciclos, ativo, selectMusic } = this.state;
    const { reset } = this.props;
    return (
      <form className="form">
        <div className="inputs-form">
          <label htmlFor="work">
            Pomodoro
            <input 
              value={ timeWork }
              type="number"
              id="work"
              name="timeWork" 
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="pausa">
            Pausa curta
            <input
              value={ pausaCurta } 
              type="number"
              id="pausaCurta"
              name="pausaCurta"
              onChange={ this.handleChange } 
            />
          </label>
          <label htmlFor="pausa">
            Pausa longa
            <input
              value={ pausaLonga } 
              type="number"
              id="pausaLonga"
              name="pausaLonga"
              onChange={ this.handleChange } 
            />
          </label>
          <label htmlFor="ciclos">
            Ciclos
            <input
              value={ ciclos } 
              type="number"
              id="ciclos"
              name="ciclos"
              onChange={ this.handleChange } 
            />
          </label>
        </div>
        <div className="buttons-form">
          <button 
            type="button"
            onClick={ this.handleClickInfo }
            disabled ={ ativo ? true : false }
          >
            Começar
          </button>
          <button
            type="button"
            onClick={ this.handleInterruption }
            disabled ={ ativo ? false : true }
          >
            Reset
          </button>
        </div>
        <label htmlFor="selectMusic">
          Selecione uma música para se concentrar melhor:
          <select
            className="select-form" 
            name="selectMusic" 
            id="selectMusic"
            value={ selectMusic }
            onChange={ this.handleChange }
          >
            <option value="nenhuma">Nenhuma</option>
            <option value="Concentration">Concentration</option>
            <option value="jazz">Jazz</option>
            <option value="opera">Opera</option>
          </select>
        </label>
        <div className="yt-videos">
          { selectMusic==='Concentration' ? <YoutubeConcentration /> : '' }
          { selectMusic==='jazz' ? <YoutubeJazz /> : '' }
          { selectMusic==='opera' ? <YoutubeOpera /> : '' }
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  getInfoTimeProps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pomodoro: state.time.time,
});

const mapDispatchToProps = (dispatch) => ({
  getInfoTimeProps: (payload) => dispatch(getInfoTimeAction(payload)),
  reset: (payload) => dispatch(resetAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
