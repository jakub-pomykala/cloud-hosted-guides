function run_script() {

    global.fetch = require("node-fetch");
    
    const measurement_id = `G-T394NPE4G1`;
    const api_secret = `2-_zVGdETrWtZZNdVdBBwA`;
    
    fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
      method: "POST",
      body: JSON.stringify({
        "client_id": "Lab_faces",
        "non_personalized_ads": false,
        "events": [
          {
            "name": "rate_lab",
            "params": {
              "Rating": 1
            }
          }
        ]
    })
    });
    }
    
    $('#dislike').click(run_script);