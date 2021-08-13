
define(['accUtils',"knockout", "ojs/ojinputtext", "ojs/ojlabel"],
 function(accUtils,ko) {
    function MyhelloModel() {
 
      self = this;

      self.firstName = ko.observable("Luis");
      self.lastName = ko.observable("Orozco");

      self.fullName = ko.pureComputed(()=>{
          return this.firstName() + " "+ this.lastName();
      },self)

      this.connected = () => {
        accUtils.announce('Myhello page loaded.', 'assertive');
        document.title = "Myhello";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return MyhelloModel;
  }
);
