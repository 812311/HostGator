import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Container, Section } from './styles';

const RadioHG = withStyles({
  root: {
    color: '#B9D0EF',
    background: '#fff',
    '&$checked': {
      color: '#FFFFFF',
      background: '#4480C5',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function CustomRadio(props) {
  return (
    <Section>
      <RadioHG {...props} />
      <Container>{props.children}</Container>
    </Section>
  );
}
