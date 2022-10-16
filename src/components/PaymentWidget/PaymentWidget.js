import { Component } from 'react';
import { PaymentMethods } from 'components/PaymentMethods/PaymentMethods';
import { Container } from './PaymentWidget.styled';
import { paymentMethods } from '../../constans';
import { VisaPaymentForm } from '../VisaPaymentForm/VisaPaymentForm';
import { MasterCardPaymentForm } from '../MasterCardPaymentForm/MasterCardPaymentForm';

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
        {selectedMethod === paymentMethods.visa && <VisaPaymentForm />}
        {selectedMethod === paymentMethods.mastercard && (
          <MasterCardPaymentForm />
        )}
        {selectedMethod === paymentMethods.applepay && (
          <div>Apple Pay form</div>
        )}
      </Container>
    );
  }
}
