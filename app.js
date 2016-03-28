angular.module('app', ['ngMessages', 'chart.js']);

//use ngMessages **
//step1. link the ng messages cdn and add ngMessages as a dependency on the app in the square brackets

//
// FORM VALIDATION WITH NG MESSAGES
// <form name="myForm">
//     <input type="text" name="myField"  ng-model="field" required minlength="5" />
//         <div ng-messages="myForm.myField.$error">
//             <div ng-message="required">You did not enter a field</div>
//             <div ng-message="minlength">The value entered is too short</div>
//         </div>
// </form>
