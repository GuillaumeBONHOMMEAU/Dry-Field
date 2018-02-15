exports.paths = {
  public: 'public',
  watched: ['public/css', 'public/js/features']
}
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': 'public/js/features'
    }
  },
  stylesheets: {
    joinTo: 'css/app.css'
  }
}

exports.plugins = {
  keyword: {
    filePattern: /\.(js|css|html|json)$/,
    extraFiles: []
  },
  babel: {
    presets: ['env'],
    plugins: ['transform-object-rest-spread'],
    ignore: [
      /^node_modules/
    ]
  }
}

exports.npm = {
  compilers: ['babel-brunch']
}
