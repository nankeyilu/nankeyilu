const fetch = require('node-fetch')

const feedUrl = 'https://nanke.suste.ch/atom.xml'
exports.handler = async (event, context) => {
  let response
  const params = new URLSearchParams()
  params.append("hub.mode", "publish")
  params.append("hub.url", feedUrl)

  console.log("[google-pubsubhubbub] Preparing to ping pubsubhubbub.appspot.com")
  response = await fetch("http://pubsubhubbub.appspot.com/", {method: 'POST', body: params})
  if (!response.ok) {
    console.log("[google-pubsubhubbub] ping failed:", response.status, response.body)
    return {
      statusCode: response.status,
      body: JSON.stringify({
        error: response.body
      })
    }
  }

  console.log("[google-pubsubhubbub] ping succeeded");
  return {
    statusCode: response.status,
    body: JSON.stringify({
      data: response.body
    })
  }
}
