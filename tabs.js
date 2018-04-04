
// Create an immediately invoked functional expression to wrap our code
(function() {
	// Define our constructor
	window.FTTabs = function(container) {
		// Create global element references
		this.container = container;
		this.tabs;
		this.panels;

		//console.log(this);
		// Create options by extending defaults with the passed in arugments
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}
	}
	// Define option defaults
	// some new comments
	var defaults = {
		side: 'top',
		accordian: false,
		test: 'foo',
		test1: 'bar'
	}
	FTTabs.prototype.init = function(container) {
		var
		_         = this,
		container = this.container,
		tabs 	  = Array.from(container.children[0].children),
		panels	  = Array.from(container.children);
  		panels.shift();

  		tabs[0].classList.toggle('active');
  		panels[0].classList.toggle('open');

		initializeEvents.call(this, tabs, 'active');
	}

	// Private Methods
	function initializeEvents(elementGroup, className) {
		for (var i = elementGroup.length - 1; i >= 0; i--) {
			elementGroup[i].addEventListener("click",function() {
				var panelId     = this.getAttribute('aria-controls'),
				    activePanel = document.getElementById(panelId),
				    tabs        = Array.from(this.parentNode.children),
				    panels      = Array.from(activePanel.parentNode.children);
					panels.shift();

				tabs.forEach(function(element) {
					element.classList.remove(className);
				});
				panels.forEach(function(element) {
					element.classList.remove('open');
				});

				this.classList.toggle(className);
				activePanel.classList.toggle('open');

			}, false);
		}
	}

	function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}

}());



var tabsContainer = document.getElementById('tabsContainer');
var tabs1 = new FTTabs(tabsContainer).init();

var tabsContainer2 = document.getElementById('tabsContainer2');
var tabs2 = new FTTabs(tabsContainer2).init();