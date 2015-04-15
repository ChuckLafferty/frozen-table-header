//frozenHeader.js

(function ( $ ) {
	$.fn.frozenTableHeader = function( options ) {

		// This is the easiest way to have default options.
		var settings = $.extend({
			width: '200px',
			height: '200px'
		}, options);

		this.children('thead')
			.children('tr')
			.wrap('<tr></tr>')
			.wrap('<th></th>')
			.wrap('<div></div>')
			.wrap('<table class="frozenTableHeader-header"></table>');

		this.children('tbody')
			.wrap('<tr></tr>')
			.wrap('<td></td>')
			.wrap('<div class="frozenTableHeader-holder"></div>')
			.wrap('<table class="frozenTableHeader-inner"></table>');

		this.children('tfoot')
			.wrap('<tr></tr>')
			.wrap('<td></td>')
			.wrap('<div></div>')
			.wrap('<table class="frozenTableHeader-footer"></table>');

		$( '.frozenTableHeader-header tr td', this ).width( settings.width );
		$( '.frozenTableHeader-inner tr td', this ).width( settings.width );
		$( '.frozenTableHeader-footer tr td', this ).width( settings.width );
		$( '.frozenTableHeader-holder', this ).height( settings.height );

		return this;
	};
}( jQuery ));