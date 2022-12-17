/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")(["@pusher/push-notifications-web"])
const withPWA = require("next-pwa")({
  dest: "public",
})

module.exports = withPWA()

// pass the modules you would like to see transpiled

// module.exports = withTM()

// withPwa(
//   withCSS(
//     withSass({
//       webpack(config, options) {
//         config.module.rules.push(
//           {
//             test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//             use: {
//               loader: "url-loader",
//               options: {
//                 limit: 100000,
//               },
//             },
//           },
//           {
//             test: /\.(ogg|mp3|wav|mpe?g)$/i,
//             loader: "file-loader",
//             options: {
//               name: "[path][name].[ext]",
//             },
//           },
//         )
//         return config
//       },
//       pwa: {
//         dest: "public",
//       },
//     }),
//   ),
// )
