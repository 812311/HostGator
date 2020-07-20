import React, { Component } from 'react';
import { GoCheck } from 'react-icons/go';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PlanActions } from '../../store/reducers/plans';
import Logo from '../../assets/images/hostgator-logo.svg';
import Grupo29995 from '../../assets/images/Grupo29995.svg';
import Grupo29996 from '../../assets/images/Grupo29996.svg';
import Grupo29390 from '../../assets/images/Grupo29390.svg';
import Radio from '../../components/CustomRadio';
import api from '../../services/api';
import {
  Container,
  Header,
  Information,
  SubTitle,
  IconGrupo29390,
  Cycles,
  CyclesBox,
  Banner,
} from './styles';
import Plans from '../../components/Plans';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1',
      products: [],
    };
  }

  async componentDidMount() {
    const res = await api.get('product');
    this.setState({ products: Object.values(res.data.products) });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value, products } = this.state;
    return (
      <Container>
        <Header>
          <img src={Logo} alt="HostGatorLogo" />
        </Header>
        <Banner>
          <img src={Grupo29995} alt="Grupo29995" />
          <Information>
            <span>Hospedagem de Sites</span>
            <h3>
              Tenha uma hospedagem de sites estável e evite perder visitantes
              diariamente
            </h3>
            <SubTitle>
              <span>
                <GoCheck size={20} color="#FFF" />
                99,9% de disponibilidade: seu site sempre no ar
              </span>
              <div>
                <span>
                  <GoCheck size={20} color="#FFF" />
                  Suporte 24h, todos os dias
                </span>
                <span>
                  <GoCheck size={20} color="#FFF" />
                  Painel de Controle cPanel
                </span>
              </div>
              <IconGrupo29390>
                <img src={Grupo29390} alt="Grupo29390" />
              </IconGrupo29390>
            </SubTitle>
          </Information>
          <img src={Grupo29996} alt="Grupo29996" />
        </Banner>
        <CyclesBox>
          <span>Quero pagar a cada:</span>
          <Cycles>
            <Radio
              name="plan"
              checked={value === '1'}
              onChange={this.handleChange}
              value="1"
            >
              1 Mês
            </Radio>
            <Radio
              name="plan"
              checked={value === '12'}
              onChange={this.handleChange}
              value="12"
            >
              1 Ano
            </Radio>
            <Radio
              name="plan"
              checked={value === '36'}
              onChange={this.handleChange}
              value="36"
            >
              3 Anos
            </Radio>
          </Cycles>
        </CyclesBox>
        <div>
          <Plans plans={products} cycle={parseInt(value)} />
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  planState: state.profiles,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlanActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
