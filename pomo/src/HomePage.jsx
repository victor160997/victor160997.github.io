import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cronometro from './components/Cronometro'
import Form from './components/Form'
import './HomePage.css';

class HomePage extends Component {
  render() {
    const { pomodoro } = this.props;
    return (
      <div className="home-page-body">
        <h1 className="title-home-page">Pomodoro</h1>
        <Form />
        { pomodoro && pomodoro.ativo ? <Cronometro pomodoro={ pomodoro } /> : '' }
        <footer>
          <p><b>Feito com</b>: React, Redux e CSS</p>
          <p><b>Autor</b>: Victor Mendonça Rodrigues</p>
          <p><b>E-mail</b>: victor.men.dev@gmail.com</p>
          <p><b>Versão</b>: 1.0</p>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pomodoro: state.time.time,
})

export default connect(mapStateToProps)(HomePage)
