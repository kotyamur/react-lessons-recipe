import { Container, Button } from './PaymentMethods.styled';
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { paymentMethods } from '../../constans';

export const PaymentMethods = ({ selectedMethod, onSelect }) => {
  return (
    <Container>
      <Button
        onClick={() => onSelect(paymentMethods.mastercard)}
        selected={selectedMethod === paymentMethods.mastercard}
      >
        <FaCcMastercard size={24} /> Mastercard
      </Button>
      <Button
        onClick={() => onSelect(paymentMethods.visa)}
        selected={selectedMethod === paymentMethods.visa}
      >
        <FaCcVisa size={24} /> Visa
      </Button>
      <Button
        onClick={() => onSelect(paymentMethods.applepay)}
        selected={selectedMethod === paymentMethods.applepay}
      >
        <FaCcApplePay size={24} /> Apple Pay
      </Button>
    </Container>
  );
};
