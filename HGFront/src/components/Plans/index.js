import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  OrangeBG,
  PlanHeader,
  WhiteContainer,
  PlanPrice,
  ContrateButton,
  BeneficiosInfo,
  Middler,
} from './styles';
import { ReactComponent as Grupo29910 } from '../../assets/images/Grupo29910.svg';

const history = createBrowserHistory({ forceRefresh: true });
async function SignupPlan(pid, billingcycle, promocode) {
  history.push(
    `?a=add&pid=${pid}&billingcycle=${billingcycle}&promocode=${promocode}`
  );

  alert('Plano contratado!');
}

function Plans(props) {
  const promohg40 = 'PROMOHG40';
  return props.plans.map((plan) => (
    <Middler key={plan.id}>
      <OrangeBG>
        <WhiteContainer>
          <PlanHeader>
            <Grupo29910 />
            <span>{plan.name}</span>
          </PlanHeader>

          <PlanPrice>
            <div>
              <span>
                R$
                {
                  Object.values(plan.cycle).find(
                    (cycle) => cycle.months === props.cycle
                  ).priceOrder
                }
              </span>
              <strong>
                R$
                {(
                  Object.values(plan.cycle).find(
                    (cycle) => cycle.months === props.cycle
                  ).priceOrder * 0.6
                ).toFixed(2)}
              </strong>
            </div>

            <span>equivalente a</span>

            <h3>
              R${' '}
              <strong>
                {(
                  (Object.values(plan.cycle).find(
                    (cycle) => cycle.months === props.cycle
                  ).priceOrder *
                    0.6) /
                  Object.values(plan.cycle).find(
                    (cycle) => cycle.months === props.cycle
                  ).months
                ).toFixed(2)}
              </strong>
              /mês*
            </h3>
            <ContrateButton
              onClick={() => SignupPlan(plan.id, props.cycle, promohg40)}
            >
              Contrate Agora
            </ContrateButton>
            <h4>
              1 ano de Domínio Grátis
              <FaInfoCircle size={16} color="#16437E" />
            </h4>
            <h5>
              economize R${' '}
              {(
                Object.values(plan.cycle).find(
                  (cycle) => cycle.months === props.cycle
                ).priceOrder -
                Object.values(plan.cycle).find(
                  (cycle) => cycle.months === props.cycle
                ).priceOrder *
                  0.6
              ).toFixed(2)}
              <span>40% OFF</span>
            </h5>
          </PlanPrice>
          <BeneficiosInfo>
            <span>
              Sites Ilimitados <br />
              <strong>100 GB</strong> de Armazenamento <br />
              Contas de E-mail<strong> Ilimitadas</strong>
              <br /> Criador de Sites{' '}
              <strong className="underlined">Grátis</strong>
              <br /> Certificado SSL <strong>Grátis</strong>
              (https)
            </span>
          </BeneficiosInfo>
        </WhiteContainer>
      </OrangeBG>
    </Middler>
  ));
}

export default Plans;
