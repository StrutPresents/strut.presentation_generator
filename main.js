if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['ServiceRegistry'],
function(SR) {
	// Service will be a service collection of the available backends?
	return {
		initialize: function(registry) {
			var service = new SR.ServiceCollection(registry,
				'strut.presentation_generator',
				function(entry) { return entry.service(); });

			registry.register('strut.presentation_generator.GeneratorCollection',
				service);
		}
	};
});