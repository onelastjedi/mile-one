import fetch from 'node-fetch'
const { MAILCHIMP_API_URL, MAILCHIMP_API_KEY } = process.env

export default (req, res) => {
  const body = {
    email_address: req.body.email,
    status: 'subscribed'
  }

  fetch(MAILCHIMP_API_URL, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { Authorization: `Basic ${MAILCHIMP_API_KEY}` }
  })
    .then(response => response.json())
    .then(json => res.send(json))
}
