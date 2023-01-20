const { cpus } = require('os')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  expermental:{
    workerThreads:false,
    cpus:1
  }
}
