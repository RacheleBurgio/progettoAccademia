import React from 'react'
import { Helmet } from 'react-helmet-async'

const Iubenda = () => (
  <Helmet>
    <script type="text/javascript">
      {`
        var _iub = _iub || [];
        _iub.csConfiguration = {
          "siteId": 3997310,
          "cookiePolicyId": 72056256,
          "lang": "it",
          "storage": { "useSiteId": true }
        };
      `}
    </script>
    <script
      type="text/javascript"
      src="https://cs.iubenda.com/autoblocking/3997310.js"
    ></script>
    <script
      type="text/javascript"
      src="//cdn.iubenda.com/cs/gpp/stub.js"
    ></script>
    <script
      type="text/javascript"
      src="//cdn.iubenda.com/cs/iubenda_cs.js"
      charset="UTF-8"
      async
    ></script>
  </Helmet>
)

export default Iubenda
