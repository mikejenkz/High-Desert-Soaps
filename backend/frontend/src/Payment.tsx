
import { PaymentForm } from 'react-square-web-payments-sdk';
import {CreditCard} from 'react-square-web-payments-sdk';

export default function Payment() {
  return (
    <div>
      <PaymentForm
        applicationId="sandbox-sq0idb-WrOVw2MOfsoWTKxZajXkKQ"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='LE6Z5ZY9S5EAM'
      >
        <CreditCard />
      </PaymentForm>
    </div>
  )
}