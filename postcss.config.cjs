// const pokeImage = require('./src/')

module.exports = {
	plugins: [
		require('autoprefixer'),
		require('postcss-nested'),
		require('postcss-mixins')({
			mixins: {
				images: (_, name) => {
					return {
						'background-image': `url('src/assets/${name}-desktop.png')`,
						animation: `${name} 12s infinite`,
						'animation-play-state': 'paused',
					};
				},
			},
		}),
	],
};
