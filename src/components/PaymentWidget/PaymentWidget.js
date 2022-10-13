import { Component } from 'react';
import { PaymentMethods } from 'components/PaymentMethods/PaymentMethods';
import { Container } from './PaymentWidget.styled';
import { paymentMethods } from '../../constans';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = method => {
    this.setState({
      selectedMethod: method,
    });
  };
  render() {
    const { selectedMethod } = this.state;
    return (
      <Container>
        <PaymentMethods
          selectedMethod={selectedMethod}
          onSelect={this.selectPaymentMethod}
        />
        {selectedMethod === paymentMethods.visa && <div>Visa form</div>}
        {selectedMethod === paymentMethods.mastercard && (
          <div>Mastercard form</div>
        )}
        {selectedMethod === paymentMethods.applepay && (
          <div>Apple Pay form</div>
        )}
      </Container>
    );
  }
}
