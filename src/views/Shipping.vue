<template>
  <div class="shipping">
    <product-header />

    <div class="shipping--wrapper">
      <h1>Shipping</h1>

      <p>We do our best to process orders within 2 business days before shipping them out.</p>

      <ul>
        <li>Orders are processed Monday — Friday, excluding Federal Holidays.</li>
        <li>Orders placed after 2:00 PM PST, or on non-business days will typically begin processing the next business day.</li>
        <li>Duties, taxes or other fees are the responsibilities of the recipient. </li>
        <li>A signature may be required for delivery.</li>
        <li>We do not ship to PO Boxes or freight forwarders.</li>
        <li>We offer free shipping within the U.S. on orders over $250, and similarly subsidise international shipping.</li>
      </ul>

      <h3>United States</h3>

      <table>
        <thead>
          <th>Order</th>
          <th>Cost</th>
          <th>Delivery Time (+2 day for processing)</th>
        </thead>

        <tbody>
          <tr>
            <td>$0 - $249</td>
            <td>$7.00</td>
            <td>2-7 Days</td>
          </tr>
          <tr>
            <td>$250.00 and up<br>Signature required</td>
            <td>Free</td>
            <td>2-7 days</td>
          </tr>
          <tr>
            <td>UPS Next Day*<br>Orders placed by<br>1pm EST</td>
            <td>$40~</td>
            <td>Add 1-2 business days<br>for processing</td>
          </tr>
        </tbody>
      </table>

      <p class="shipping--legend">
        *Not available for PO Box and APO/FPO addresses.<br>If your order absolutely needs to arrive on a certain day, please contact us.
      </p>

      <h3>International</h3>

      <table>
        <thead>
          <th>Order</th>
          <th>Cost</th>
          <th>Delivery Time (+2 day for processing)</th>
        </thead>
        <tbody>
          <tr>
            <td>$0 - $249<br>FedEx Intl or DHL<br>Express Worldwide</td>
            <td>$32.00</td>
            <td>6-30 Days</td>
          </tr>
          <tr>
            <td>$250.00 and up<br>FedEx Intl or DHL<br>Express Worldwide</td>
            <td>$60.00</td>
            <td>6-30 days</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>Expedited shipping is not available for international orders.</li>
        <li>International orders typically arrive in 1-2 weeks. Delays may occur if your item is held up in customs. Keep in mind once a parcel is in customs, we cannot intervene or inquire about the status of the parcel. Please check your tracking number regularly for the package to clear customs.</li>
        <li>Import taxes, customs duties and fees are the responsibilities of the recipient and will be due at the time of delivery. We are unable to predict which of these fees will be applied, and not responsible for complying with regulations of the destination country.</li>
        <li>We deliver to Russia via USPS International. Costs will be shown at the checkout.</li>
      </ul>

      <p>For questions, <b>contact us</b>.</p>

      <h3>Returns</h3>

      <div class="shipping--label">
        For USA orders
      </div>

      <p>If you are not completely satisfied with your purchase, items may be returned for a refund within 30 days of the original purchase.</p>

      <ul>
        <li>Items must be in new condition, undamaged, and have all tags attached.</li>
        <li>Stationery items must be unopened and in its original packaging. </li>
        <li>Books must be shrink-wrapped.</li>
        <li>All sales are final for electronic gift cards, digital items, custom orders (such as 1M Hauly Heist), and discounted or workshop items.</li>
        <li>We do not offer returns or exchanges for products purchased through other locations than blackmile.co.</li>
        <li>The return or exchange policy applies only to the original purchaser.</li>
        <li>Shipping fees both ways are not refunded.</li>
        <li>Please contact us to initiate a return and we'll provide you with further instructions. </li>
      </ul>

      <div class="shipping--label">
        If you’re outside the USA
      </div>

      <p>International returns are not currently available, sorry. The cost of shipping and handling items back is too high to make it workable for either side.</p>
      <p>We won't be able to offer support on local customs or refunds for import duties and taxes. However, we do our best to prepare the supporting documents prior to the shipment.</p>

      <h3>Exchanges</h3>
      <p>Please return your item using the return process above, then place your new order online.</p>

      <h3>Warranty</h3>
      <p>We guarantee our products against defects in materials and workmanship for a period of one (1) year from the date of original purchase. The warranty applies only to the original purchaser and to the products purchased directly from sdrtraveller.com. Dyneema does have some unique properties and we recommend you read ownership, wear and care in order to understand what you’re buying and to make the most of these goods.</p>
    </div>
  </div>
</template>

<script>
import ProductHeader from '@/components/ProductHeader'
export default {
  components: {
    ProductHeader
  }
}
</script>

<style lang="scss">
  .shipping {
    background-color: #E9E1DE;
    position: relative;

    h1 {
      font-size: 40px;
      font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      font-weight: 500!important;
    }

    h3 {
      font-family: "Avenir Next", Helvetica, Arial, sans-serif!important;
      font-size: 24px;
      font-weight: 500!important;
    }

    p {
      line-height: 1.7;
    }

    ul {
      padding-left: 20px;
      line-height: 1.7;
    }

    table {
      border-collapse: collapse;
      text-align: left;
      line-height: 1.5;

      thead th {
        background-color: #222222;
        color: white;
        padding: 15px 30px;
      }

      tbody td {
        background-color: white;
        padding: 15px 30px;
        border-bottom: 1px solid #00CD77;
        border-right: 1px solid #00CD77;
      }

      tbody tr:last-child td {
        border-bottom: none;
      }

      tbody td:last-child {
        border-right: none;
      }
    }

    &--label {
      display: inline-block;
      padding: 10px 20px;
      margin-bottom: 20px;
      background-color: #00CD77;
    }

    &--legend {
      padding-left: 30px;
    }

    &--wrapper {
      box-sizing: border-box;
      font-size: 18px;
      max-width: 980px;
      padding: 20px 100px 60px 0;
      margin: 0 auto;
    }
  }
</style>
