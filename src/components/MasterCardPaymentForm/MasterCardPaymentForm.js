import { Formik } from 'formik';
import { FormField } from '../FormField/FormField';

import { Form } from '../Form/Form';
import { paymentSchema } from 'validation';

export const MasterCardPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => actions.setSubmitting(false), 2000);
  };
  return (
    <Formik
      initialValues={{ cardHolder: '', cardNumber: '', cvv: '' }}
      onSubmit={handleSubmit}
      validationSchema={paymentSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <FormField label="Card holder" name="cardHolder" />
            <FormField label="Card number" name="cardNumber" />
            <FormField label="CVV" name="cvv" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Trying to pay...' : 'Pay'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
