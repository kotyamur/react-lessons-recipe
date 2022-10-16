import { Formik } from 'formik';
import { FormField } from '../FormField/FormField';

import { Form } from '../Form/Form';
import { paymentSchema } from 'validation';

export const VisaPaymentForm = () => {
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
      {/* формику можно передать чилдрены
      (выражение, в котором функция возвращает разметку) 
      эта функция получит пропсы формы (Render prop)isSubmitting это пропс*/}
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
