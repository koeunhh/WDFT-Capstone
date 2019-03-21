// const express = require('express'),
//       axios = require('axios'),
//       cors = require('cors');
//       app = express();



// app.use(cors({
//   origin: 'http://localhost:3000'
// }))

// app.get('/login', function(req, res) {
//   var scopes = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=token' +
//     '&client_id=' + my_client_id +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent(redirect_uri));
// });

// const urlParams = new URLSearchParams(window.location.search);
// const code = urlParams.get('code');

// const config =   {
//   method: "POST",
//   url: "https://accounts.spotify.com/api/token",
//   data: {
//     "grant_type":    "authorization_code",
//     "code":          code,
//     "redirect_uri":  'http://localhost:3030/loading',
//     "client_secret": '2310b859f1cd4e3dae5ae9f1eabfd8e3',
//     "client_id": 'df1b151174ac40db981ad60c6f4e5c3c'
//   },
//   success: function(result) {
//     // handle result...
//   },
// }

// axios(config)
//   .then(result => {
//     // spotifyApi.setAccessToken(result.data.access_token);
//     console.log(result.data.access_token);
//     // getPlaylist('happy');
//   })
//   .catch(err => {
//     console.log(err);
// });


// app.listen(8080, () => {
//   console.log('running on http://localhost:8080');
// })